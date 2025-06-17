'use client';

export default function GlobalError({
    error,
    reset,
}: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
    return (
        <html>
            <body>
                <h2>Что-то пошло не так!</h2>
                {error.digest && <p>{error.digest}</p>}
                <button onClick={() => reset()}>Попробовать снова</button>
            </body>
        </html>
    );
}
