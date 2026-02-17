"use client"

// import { NextStudio } from "next-sanity/studio";
// import config from "../../../../sanity.config";

export default function StudioPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-slate-50">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-slate-900">Sanity Studio</h1>
                <p className="text-slate-600">Please run the project locally to access the Studio.</p>
            </div>
        </div>
    );
    // return <NextStudio config={config} />;
}
