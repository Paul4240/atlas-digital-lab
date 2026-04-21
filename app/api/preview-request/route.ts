export async function POST(request: Request) {
  try {
    const body = await request.json();

    const scriptUrl = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const text = await response.text();

    return new Response(
      JSON.stringify({
        ok: response.ok,
        message: "Request submitted",
        sheetResponse: text,
      }),
      {
        status: response.ok ? 200 : 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Something went wrong submitting the request.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}