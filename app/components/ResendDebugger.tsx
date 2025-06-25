"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react"

interface DebugInfo {
  status: "success" | "error" | "loading"
  message: string
  debug?: any
}

export default function ResendDebugger() {
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const testResendConnection = async () => {
    setIsLoading(true)
    setDebugInfo({ status: "loading", message: "Testing Resend connection..." })

    try {
      const response = await fetch("/api/contact", {
        method: "GET",
      })

      const data = await response.json()

      setDebugInfo({
        status: data.status === "success" ? "success" : "error",
        message: data.message,
        debug: data.debug,
      })
    } catch (error) {
      setDebugInfo({
        status: "error",
        message: "Failed to test connection",
        debug: { error: error instanceof Error ? error.message : "Unknown error" },
      })
    } finally {
      setIsLoading(false)
    }
  }

  const sendTestEmail = async () => {
    setIsLoading(true)
    setDebugInfo({ status: "loading", message: "Sending test email..." })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test User",
          email: "test@example.com",
          phone: "(555) 123-4567",
          contactMethod: "email",
          message: "This is a test message from the Resend debugger.",
          inquiryType: "test",
          product: "Debugger Test",
          currentUrl: window.location.href,
        }),
      })

      const data = await response.json()

      setDebugInfo({
        status: response.ok ? "success" : "error",
        message: data.message || data.error,
        debug: data.debug,
      })
    } catch (error) {
      setDebugInfo({
        status: "error",
        message: "Failed to send test email",
        debug: { error: error instanceof Error ? error.message : "Unknown error" },
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusIcon = () => {
    if (isLoading) return <RefreshCw className="h-5 w-5 animate-spin" />

    switch (debugInfo?.status) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-600" />
    }
  }

  const getStatusBadge = () => {
    if (isLoading) return <Badge variant="secondary">Testing...</Badge>

    switch (debugInfo?.status) {
      case "success":
        return (
          <Badge variant="default" className="bg-green-600">
            Connected
          </Badge>
        )
      case "error":
        return <Badge variant="destructive">Error</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {getStatusIcon()}
          Resend Email Service Debugger
          {getStatusBadge()}
        </CardTitle>
        <CardDescription>Test the Resend email service connection and functionality</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <Button onClick={testResendConnection} disabled={isLoading} variant="outline">
            Test Connection
          </Button>
          <Button onClick={sendTestEmail} disabled={isLoading} variant="default">
            Send Test Email
          </Button>
        </div>

        {debugInfo && (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-50">
              <h4 className="font-semibold mb-2">Status Message:</h4>
              <p
                className={`${
                  debugInfo.status === "success"
                    ? "text-green-700"
                    : debugInfo.status === "error"
                      ? "text-red-700"
                      : "text-yellow-700"
                }`}
              >
                {debugInfo.message}
              </p>
            </div>

            {debugInfo.debug && (
              <div className="p-4 rounded-lg bg-gray-50">
                <h4 className="font-semibold mb-2">Debug Information:</h4>
                <pre className="text-sm bg-gray-100 p-3 rounded overflow-auto">
                  {JSON.stringify(debugInfo.debug, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}

        <div className="text-sm text-gray-600 space-y-2">
          <p>
            <strong>Environment Check:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>NEXT_RESEND_API_KEY environment variable should be set</li>
            <li>API key should start with "re_" for Resend</li>
            <li>Domain should be verified in Resend dashboard</li>
            <li>From email should use verified domain</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
