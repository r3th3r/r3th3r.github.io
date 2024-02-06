"use client";

export default function Page() {

    const slugs = [
        "dotenv"
    ];

    return (
        <main className="flex flex-1 flex-col justify-center items-center max-w-md gap-8">
            <h2 className="mb-2 text-lg font-semibold">Mémoire:</h2>
            <p className="text-justify">
                Dans le cadre du développement de ce portfolio, une décision cruciale a été la sélection ou l'obligation
                d'utiliser Next.JS comme cadre de développement principal. Ci-dessous les avantages de ce choix.
            </p>

            <p className="text-justify">
                Le premier avantage est l'optimisation des images. Lorsque l'image n'est pas dans la vision de
                l'utilisateur, elle n'est pas chargée. Cela permet de réduire le temps de chargement de la page.
            </p>

            <p className="text-justify">
                Le deuxième avantage est le système de routage simplifié de Next .js. Le routage basé sur le système de
                fichiers permet de créer de nouvelles vues et routes de manière intuitive, en créant des fichiers dans
                les différents dossiers des pages.
            </p>

            <p className="text-justify">
                Le dernier avantage est le deploiment. Next.JS permet de déployer facilement le site sur Vercel.
            </p>
        </main>
    );
}
