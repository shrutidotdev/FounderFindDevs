import React from 'react';
import { Check } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <div className="bg-purple-100 p-8 rounded-xl shadow-lg w-full max-w-md overflow-hidden">
        <div className="p-8 flex flex-col items-center">
          <div className="mb-6 transform transition-all duration-300 hover:scale-105">
            <div className="rounded-full bg-rose-400 p-4 shadow-md shadow-rose-200">
              <Check size={60} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful</h1>
          <p className="text-gray-500 text-center mb-6">Your transaction has been processed successfully</p>
          
          <div>
            <Link href="/">
            <Button className="w-full py-3 bg-rose-400 text-white font-medium rounded-lg hover:bg-rose-500 transition-colors duration-300">
              Back to Dashboard
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;