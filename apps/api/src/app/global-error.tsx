"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          fontFamily: "Arial",
          padding: 40,
        }}
      >
        <h1>Une erreur est survenue</h1>

        <p>{error.message}</p>

        <button onClick={() => reset()}>
          Réessayer
        </button>
      </body>
    </html>
  );
}