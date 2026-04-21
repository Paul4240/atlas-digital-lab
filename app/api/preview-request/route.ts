export async function POST(request: Request) {
  try {
    const body = await request.json();

    const scriptUrl =
  "https://script.google.com/macros/s/AKfycbw.../exec";
    

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
      redirect: "follow",
      cache: "no-store",
    });

    const text = await response.text();

    return new Response(
      JSON.stringify({
        ok: true,
        status: response.status,
        responseText: text,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong submitting the request.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}