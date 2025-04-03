"use client";

import QuestionForm from "@/components/QuestionForm";
import { useAuthStore } from "@/store/Auth";
import slugify from "@/utils/slugify";
import { Models } from "appwrite";
import { useRouter } from "next/navigation";
import React from "react";

const EditQues = ({ question }: { question: Models.Document }) => {
    const { user } = useAuthStore();
    const router = useRouter();

    React.useEffect(() => {
        if (!question || !user) return; 
    
        if (question.authorId !== user.$id) {
            router.push(`/questions/${question.$id}/${slugify(question.title)}`);
        }
    }, [question, user, router]);
    
    if (!question || !user) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }
    
    if (user.$id !== question.authorId) return null;
    
    return (
        <div className="min-h-screen bg-black text-white px-4 py-8">
            <div className="max-w-3xl mx-auto w-full">
                <h1 className="text-2xl md:text-3xl font-bold mb-8">
                    Edit your public question
                </h1>
                <QuestionForm question={question} />
            </div>
        </div>
    );
};

export default EditQues;