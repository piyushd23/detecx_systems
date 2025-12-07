import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ type, onBack }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const updatedDate = "October 24, 2024";

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen relative"
    >
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
         <button 
           onClick={onBack}
           className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-cobalt transition-colors"
         >
           <ArrowLeft size={18} /> Back to Home
         </button>
         <div className="font-bold text-gray-900 hidden md:block">Detecx Legal.</div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16">
           <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
              {isPrivacy ? <Shield className="text-cobalt" size={32} /> : <FileText className="text-cobalt" size={32} />}
           </div>
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
           <p className="text-gray-500">Last updated: {updatedDate}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-gray max-w-none">
           {isPrivacy ? (
             <>
               <h3>1. Introduction</h3>
               <p>
                 At Detecx Systems ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
               </p>

               <h3>2. Data We Collect</h3>
               <p>
                 We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
               </p>
               <ul>
                 <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                 <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                 <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
               </ul>

               <h3>3. How We Use Your Data</h3>
               <p>
                 We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
               </p>
               <ul>
                 <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                 <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                 <li>Where we need to comply with a legal obligation.</li>
               </ul>

               <h3>4. Data Security</h3>
               <p>
                 We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
               </p>

               <h3>5. Your Legal Rights</h3>
               <p>
                 Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
               </p>
             </>
           ) : (
             <>
               <h3>1. Agreement to Terms</h3>
               <p>
                 By accessing or using the website operated by Detecx Systems, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
               </p>

               <h3>2. Use License</h3>
               <p>
                 Permission is granted to temporarily download one copy of the materials (information or software) on Detecx Systems' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
               </p>
               <ul>
                 <li>modify or copy the materials;</li>
                 <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                 <li>attempt to decompile or reverse engineer any software contained on Detecx Systems' website;</li>
                 <li>remove any copyright or other proprietary notations from the materials; or</li>
                 <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
               </ul>

               <h3>3. Disclaimer</h3>
               <p>
                 The materials on Detecx Systems' website are provided on an 'as is' basis. Detecx Systems makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
               </p>

               <h3>4. Limitations</h3>
               <p>
                 In no event shall Detecx Systems or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Detecx Systems' website, even if Detecx Systems or a Detecx Systems authorized representative has been notified orally or in writing of the possibility of such damage.
               </p>

               <h3>5. Governing Law</h3>
               <p>
                 These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
               </p>
             </>
           )}
        </div>
      </div>
    </motion.div>
  );
};

export default LegalPage;