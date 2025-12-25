import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Download, Trash2, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface DataRequest {
  id: string;
  request_type: "export" | "deletion";
  status: "pending" | "processing" | "completed" | "failed";
  created_at: string;
  processed_at: string | null;
  download_url: string | null;
}

export const GDPRDataPanel = () => {
  const [requests, setRequests] = useState<DataRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState<"export" | "deletion" | null>(null);
  const navigate = useNavigate();

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Please sign in to manage your data");
        navigate("/auth");
        return;
      }

      const { data, error } = await supabase
        .from("data_requests")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) throw error;
      setRequests((data as DataRequest[]) || []);
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const submitRequest = async (type: "export" | "deletion") => {
    setSubmitting(type);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user?.email) {
        toast.error("Please sign in to submit a data request");
        navigate("/auth");
        return;
      }

      // Check for recent pending/processing request of same type
      const { data: existing } = await supabase
        .from("data_requests")
        .select("id")
        .eq("email", user.email)
        .eq("request_type", type)
        .in("status", ["pending", "processing"])
        .maybeSingle();

      if (existing) {
        toast.error(`You already have a pending ${type} request`);
        return;
      }

      // Create the request
      const { data: newRequest, error: insertError } = await supabase
        .from("data_requests")
        .insert({
          user_id: user.id,
          email: user.email,
          request_type: type,
        })
        .select()
        .single();

      if (insertError) throw insertError;

      toast.success(
        type === "export"
          ? "Data export request submitted. Processing will begin shortly."
          : "Data deletion request submitted. You will receive a confirmation email."
      );

      // Trigger the edge function to process the request
      const functionName = type === "export" ? "gdpr-data-export" : "gdpr-data-deletion";
      const { error: fnError } = await supabase.functions.invoke(functionName, {
        body: { requestId: newRequest.id },
      });

      if (fnError) {
        console.error(`Error invoking ${functionName}:`, fnError);
        // Don't show error to user - the request is queued
      }

      fetchRequests();
    } catch (error) {
      console.error("Error submitting request:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setSubmitting(null);
    }
  };

  const downloadExport = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `my-data-export-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Download started");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-muted-foreground" />;
      case "processing":
        return <Loader2 className="h-4 w-4 text-primary animate-spin" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "failed":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Your Data Rights</h2>
        <p className="text-muted-foreground mt-2">
          Under GDPR, you have the right to access and delete your personal data.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Data Export */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Export Your Data</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                Download a copy of all personal data we have stored about you.
              </p>
              <Button
                onClick={() => submitRequest("export")}
                disabled={submitting !== null}
                variant="outline"
              >
                {submitting === "export" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Request Export
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>

        {/* Data Deletion */}
        <Card className="p-6 border-destructive/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-destructive/10 rounded-lg">
              <Trash2 className="h-6 w-6 text-destructive" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Delete Your Data</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                Permanently delete your account and all associated data. This cannot be undone.
              </p>
              <Button
                onClick={() => {
                  if (confirm("Are you sure you want to delete all your data? This action cannot be undone.")) {
                    submitRequest("deletion");
                  }
                }}
                disabled={submitting !== null}
                variant="destructive"
              >
                {submitting === "deletion" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Request Deletion
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Request History */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Request History</h3>
          <Button variant="ghost" size="sm" onClick={fetchRequests} disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Refresh"}
          </Button>
        </div>

        {requests.length === 0 ? (
          <Card className="p-6 text-center">
            <p className="text-muted-foreground">
              No data requests yet.{" "}
              <button onClick={fetchRequests} className="text-primary hover:underline">
                Load history
              </button>
            </p>
          </Card>
        ) : (
          <div className="space-y-3">
            {requests.map((request) => (
              <Card key={request.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(request.status)}
                    <div>
                      <p className="font-medium capitalize">
                        {request.request_type} Request
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(request.created_at)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm capitalize px-2 py-1 rounded bg-muted">
                      {request.status}
                    </span>
                    {request.request_type === "export" &&
                      request.status === "completed" &&
                      request.download_url && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => downloadExport(request.download_url!)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Info Section */}
      <Card className="p-6 bg-muted/50">
        <h4 className="font-semibold mb-2">About Your Data Rights</h4>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>Right to Access:</strong> You can request a copy of all personal data we hold about you.</li>
          <li>• <strong>Right to Erasure:</strong> You can request permanent deletion of your personal data.</li>
          <li>• <strong>Processing Time:</strong> Requests are typically processed within 24 hours.</li>
          <li>• <strong>Export Format:</strong> Data exports are provided in JSON format.</li>
          <li>• <strong>Questions?</strong> Contact us at hello@thecwtstudio.com</li>
        </ul>
      </Card>
    </div>
  );
};
