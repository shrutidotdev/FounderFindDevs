"use client"
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useFormStatus } from 'react-dom'

interface SubmitButtonText {
    text: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    icon?: React.ReactNode;
    width?: string;
  
}
const SubmitButton = ({ text, variant, icon, width }: SubmitButtonText) => {
    const { pending } = useFormStatus();
    return (
        <Button variant={variant} className={width} disabled={pending}>
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Submitting...</span>
                </>
            ) : (
                <>
                    {icon && <div>{icon}</div>}
                    <span>{text}</span>
                </>
            )}
        </Button>
    );
};


export default SubmitButton