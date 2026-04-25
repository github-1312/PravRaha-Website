// import Reveal from '../components/Reveal';

// const TOOLS = ['Apollo','ZoomInfo','Outreach','Salesloft','Clay','11x / Artisan','HubSpot','Salesforce','Other'];

// export default function Book() {
//   return (
//     <>
//       <header className="page-hero"><div className="site-container">
//         <div className="eyebrow">Book a Pipeline Review</div>
//         <h1 className="font-display font-light" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
//           Not a demo.<br /><span className="italic-serif">An architecture audit.</span>
//         </h1>
//       </div></header>

//       <section className="border-t border-border py-[100px]"><div className="site-container">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//           <Reveal>
//             <h2 className="font-display font-light mb-7" style={{ fontSize: 'clamp(30px,3.5vw,48px)', letterSpacing: '-0.025em', lineHeight: 1.08 }}>
//               45 minutes. No slides. One working map of your pipeline system.
//             </h2>
//             <p className="text-[17px] text-text-muted font-light mb-10" style={{ lineHeight: 1.65 }}>
//               This is an <strong className="text-text font-medium">architecture audit</strong> we examine your current outbound system, identify the seams costing you pipeline, and show you what autonomous revenue infrastructure looks like running on your ICP.
//             </p>

//             <div className="border border-border mb-10">
//               {[['01', 'Stack audit.', 'We map your current tools, data sources, and execution model.'],
//                 ['02', 'Signal assessment.', 'We evaluate what buying signals you track and how fast you act.'],
//                 ['03', 'Architecture blueprint.', 'We show your outbound system as unified infrastructure.']
//               ].map(([n, t, d]) => (
//                 <div key={n} className="p-5 border-b border-border last:border-b-0 grid grid-cols-[32px_1fr] gap-4">
//                   <div className="font-mono text-[11px] text-accent pt-1">{n}</div>
//                   <div className="text-[15px] text-text-muted font-light" style={{ lineHeight: 1.6 }}><strong className="text-text font-medium">{t}</strong> {d}</div>
//                 </div>
//               ))}
//             </div>

//             <div className="p-7 border border-dashed border-accent-dim font-mono text-xs text-accent tracking-wide" style={{ lineHeight: 1.7, background: 'rgba(232,168,75,0.03)' }}>
//               This is not a demo. We do not show slides. We do not pitch features.<br /><br />
//               We audit your system and show you what infrastructure replaces.
//             </div>
//           </Reveal>

//           <Reveal delay={0.1}>
//             <div className="border border-border bg-bg-elevated p-12">
//               <h3 className="font-display text-2xl font-normal mb-2" style={{ letterSpacing: '-0.02em' }}>Request a Pipeline Review</h3>
//               <div className="font-mono text-[11px] text-text-dim tracking-[0.1em] uppercase mb-9">45 min · free · no commitment</div>

//               {[['Full name', 'text', 'Your name'], ['Work email', 'email', 'you@company.com'], ['Company', 'text', 'Company name'], ['Your role', 'text', 'e.g. VP Sales, Founder, RevOps Lead']].map(([label, type, ph]) => (
//                 <div key={label} className="mb-6">
//                   <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">{label}</label>
//                   <input type={type} placeholder={ph} className="w-full py-3.5 px-4 bg-bg border border-border-strong text-text font-body text-[15px] font-light rounded outline-none focus:border-accent transition-colors" />
//                 </div>
//               ))}

//               <div className="mb-6">
//                 <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">Current stack</label>
//                 <div className="flex flex-wrap gap-3">
//                   {TOOLS.map(t => (
//                     <label key={t} className="flex items-center gap-2 py-2.5 px-4 border border-border-strong cursor-pointer text-[13px] text-text-muted bg-bg hover:border-accent-dim hover:text-text transition-all">
//                       <input type="checkbox" className="accent-accent" />{t}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">What is costing you pipeline right now?</label>
//                 <textarea placeholder="Describe the biggest bottleneck..." className="w-full min-h-[120px] py-3.5 px-4 bg-bg border border-border-strong text-text font-body text-[15px] font-light rounded outline-none resize-y focus:border-accent transition-colors" />
//               </div>

//     <button
//   className="w-full py-4 text-[16px] font-medium rounded-xl transition-all duration-300 bg-[#dcb479] text-white hover:bg-[#6f898b]"
//   onClick={() =>
//     alert("Thank you. Email pankaj@pravraha.com to schedule.")
//   }
// >
//   Request Pipeline Review & Join the waitlist{" "}
//   <span className="text-[#dcb479]"></span>
// </button>

//               <div className="mt-8 p-10 border border-dashed border-border-strong text-center font-mono text-xs text-text-dim ">
//                 <a
//                  href="https://outlook.office.com/bookwithme/user/dec60d08e8404f9ea6632cfd3dc35aae@pravraha.com?anonymous&ismsaljsauthenabled&ep=pcard"
//                  target="_blank"
//                   rel="noopener noreferrer"
//                  className="inline-block mt-8 px-14 py-4 rounded-lg text-white font-medium hover:opacity-90 transition bg-[#dcb479]"
//                  >
//                 Book a Meeting
//                 </a>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div></section>
//     </>
//   );
// }


// import Reveal from '../components/Reveal';
// import { useState } from 'react';

// const TOOLS = ['Apollo','ZoomInfo','Outreach','Salesloft','Clay','11x / Artisan','HubSpot','Salesforce','Other'];

// export default function Book() {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     role: '',
//     tools: [],
//     message: ''
//   });

//   const handleChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleToolChange = (tool) => {
//     setFormData(prev => ({
//       ...prev,
//       tools: prev.tools.includes(tool)
//         ? prev.tools.filter(t => t !== tool)
//         : [...prev.tools, tool]
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const res = await fetch('https://node.pravraha.com/landingpage/submit-query', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert('Request submitted successfully!');
//       } else {
//         alert(data.message || 'Something went wrong');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Server error. Try again.');
//     }
//   };

//   return (
//     <>
//       <header className="page-hero"><div className="site-container">
//         <div className="eyebrow">Book a Pipeline Review</div>
//         <h1 className="font-display font-light" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
//           Not a demo.<br /><span className="italic-serif">An architecture audit.</span>
//         </h1>
//       </div></header>

//       <section className="border-t border-border py-[100px]"><div className="site-container">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//           <Reveal>
//             <h2 className="font-display font-light mb-7" style={{ fontSize: 'clamp(30px,3.5vw,48px)', letterSpacing: '-0.025em', lineHeight: 1.08 }}>
//               45 minutes. No slides. One working map of your pipeline system.
//             </h2>
//             <p className="text-[17px] text-text-muted font-light mb-10" style={{ lineHeight: 1.65 }}>
//               This is an <strong className="text-text font-medium">architecture audit</strong> we examine your current outbound system, identify the seams costing you pipeline, and show you what autonomous revenue infrastructure looks like running on your ICP.
//             </p>

//             <div className="border border-border mb-10">
//               {[['01', 'Stack audit.', 'We map your current tools, data sources, and execution model.'],
//                 ['02', 'Signal assessment.', 'We evaluate what buying signals you track and how fast you act.'],
//                 ['03', 'Architecture blueprint.', 'We show your outbound system as unified infrastructure.']
//               ].map(([n, t, d]) => (
//                 <div key={n} className="p-5 border-b border-border last:border-b-0 grid grid-cols-[32px_1fr] gap-4">
//                   <div className="font-mono text-[11px] text-accent pt-1">{n}</div>
//                   <div className="text-[15px] text-text-muted font-light" style={{ lineHeight: 1.6 }}><strong className="text-text font-medium">{t}</strong> {d}</div>
//                 </div>
//               ))}
//             </div>

//             <div className="p-7 border border-dashed border-accent-dim font-mono text-xs text-accent tracking-wide" style={{ lineHeight: 1.7, background: 'rgba(232,168,75,0.03)' }}>
//               This is not a demo. We do not show slides. We do not pitch features.<br /><br />
//               We audit your system and show you what infrastructure replaces.
//             </div>
//           </Reveal>

//           <Reveal delay={0.1}>
//             <div className="border border-border bg-bg-elevated p-12">
//               <h3 className="font-display text-2xl font-normal mb-2" style={{ letterSpacing: '-0.02em' }}>Request a Pipeline Review</h3>
//               <div className="font-mono text-[11px] text-text-dim tracking-[0.1em] uppercase mb-9">45 min · free · no commitment</div>

//               {[['Full name', 'text', 'Your name', 'name'],
//                 ['Work email', 'email', 'you@company.com', 'email'],
//                 ['Company', 'text', 'Company name', 'company'],
//                 ['Your role', 'text', 'e.g. VP Sales, Founder, RevOps Lead', 'role']
//               ].map(([label, type, ph, key]) => (
//                 <div key={label} className="mb-6">
//                   <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">{label}</label>
//                   <input
//                     type={type}
//                     placeholder={ph}
//                     value={formData[key]}
//                     onChange={(e) => handleChange(key, e.target.value)}
//                     className="w-full py-3.5 px-4 bg-bg border border-border-strong text-text font-body text-[15px] font-light rounded outline-none focus:border-accent transition-colors"
//                   />
//                 </div>
//               ))}

//               <div className="mb-6">
//                 <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">Current stack</label>
//                 <div className="flex flex-wrap gap-3">
//                   {TOOLS.map(t => (
//                     <label key={t} className="flex items-center gap-2 py-2.5 px-4 border border-border-strong cursor-pointer text-[13px] text-text-muted bg-bg hover:border-accent-dim hover:text-text transition-all">
//                       <input
//                         type="checkbox"
//                         checked={formData.tools.includes(t)}
//                         onChange={() => handleToolChange(t)}
//                         className="accent-accent"
//                       />
//                       {t}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">What is costing you pipeline right now?</label>
//                 <textarea
//                   placeholder="Describe the biggest bottleneck..."
//                   value={formData.message}
//                   onChange={(e) => handleChange('message', e.target.value)}
//                   className="w-full min-h-[120px] py-3.5 px-4 bg-bg border border-border-strong text-text font-body text-[15px] font-light rounded outline-none resize-y focus:border-accent transition-colors"
//                 />
//               </div>

//               <button
//                 className="w-full py-4 text-[16px] font-medium rounded-xl transition-all duration-300 bg-[#dcb479] text-white hover:bg-[#6f898b]"
//                 onClick={handleSubmit}
//               >
//                 Request Pipeline Review & Join the waitlist
//               </button>

//               <div className="mt-8 p-10 border border-dashed border-border-strong text-center font-mono text-xs text-text-dim ">
//                 <a
//                   href="https://outlook.office.com/bookwithme/user/dec60d08e8404f9ea6632cfd3dc35aae@pravraha.com?anonymous&ismsaljsauthenabled&ep=pcard"
//                   target="_blank"
//                   rel="noopener noreferrer"
// className="inline-block mt-8 px-16 py-4 rounded-lg text-white text-[16px] font-medium hover:opacity-90 transition bg-[#dcb479]"                >
//                   Book a Meeting
//                 </a>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div></section>
//     </>
//   );
// }








// import Reveal from '../components/Reveal';
// import { useState } from 'react';
// import axios from 'axios';

// const TOOLS = ['Apollo','ZoomInfo','Outreach','Salesloft','Clay','11x / Artisan','HubSpot','Salesforce','Other'];

// export default function Book() {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     role: '',
//     tools: [],
//     message: ''
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleToolChange = (tool) => {
//     setFormData(prev => ({
//       ...prev,
//       tools: prev.tools.includes(tool)
//         ? prev.tools.filter(t => t !== tool)
//         : [...prev.tools, tool]
//     }));
//   };

//   // ✅ Validation function
//   const validateForm = () => {
//     const { name, email, company, role, tools, message } = formData;

//     if (!name.trim()) return 'Full name is required';
//     if (!email.trim()) return 'Email is required';

//     // basic email regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) return 'Enter a valid email';

//     if (!company.trim()) return 'Company is required';
//     if (!role.trim()) return 'Role is required';
//     if (tools.length === 0) return 'Select at least one tool';
//     if (!message.trim()) return 'Message is required';

//     return null;
//   };

//   const handleSubmit = async () => {
//     const error = validateForm();

//     if (error) {
//       alert(error);
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         'https://node.pravraha.com/landingpage/submit-query',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       if (res.status >= 200 && res.status < 300) {
//         alert('Request submitted successfully!');

//         // reset form
//         setFormData({
//           name: '',
//           email: '',
//           company: '',
//           role: '',
//           tools: [],
//           message: ''
//         });
//       } else {
//         alert(res.data?.message || 'Something went wrong');
//       }

//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || 'Server error. Try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <header className="page-hero"><div className="site-container">
//         <div className="eyebrow">Book a Pipeline Review</div>
//         <h1 className="font-display font-light" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
//           Not a demo.<br /><span className="italic-serif">An architecture audit.</span>
//         </h1>
//       </div></header>

//       <section className="border-t border-border py-[100px]"><div className="site-container">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//           <Reveal>
//             <h2 className="font-display font-light mb-7" style={{ fontSize: 'clamp(30px,3.5vw,48px)', letterSpacing: '-0.025em', lineHeight: 1.08 }}>
//               45 minutes. No slides. One working map of your pipeline system.
//             </h2>
//             <p className="text-[17px] text-text-muted font-light mb-10" style={{ lineHeight: 1.65 }}>
//               This is an <strong className="text-text font-medium">architecture audit</strong> we examine your current outbound system, identify the seams costing you pipeline, and show you what autonomous revenue infrastructure looks like running on your ICP.
//             </p>

//             <div className="border border-border mb-10">
//               {[['01', 'Stack audit.', 'We map your current tools, data sources, and execution model.'],
//                 ['02', 'Signal assessment.', 'We evaluate what buying signals you track and how fast you act.'],
//                 ['03', 'Architecture blueprint.', 'We show your outbound system as unified infrastructure.']
//               ].map(([n, t, d]) => (
//                 <div key={n} className="p-5 border-b border-border last:border-b-0 grid grid-cols-[32px_1fr] gap-4">
//                   <div className="font-mono text-[11px] text-accent pt-1">{n}</div>
//                   <div className="text-[15px] text-text-muted font-light" style={{ lineHeight: 1.6 }}>
//                     <strong className="text-text font-medium">{t}</strong> {d}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="p-7 border border-dashed border-accent-dim font-mono text-xs text-accent tracking-wide" style={{ lineHeight: 1.7, background: 'rgba(232,168,75,0.03)' }}>
//               This is not a demo. We do not show slides. We do not pitch features.<br /><br />
//               We audit your system and show you what infrastructure replaces.
//             </div>
//           </Reveal>

//           <Reveal delay={0.1}>
//             <div className="border border-border bg-bg-elevated p-12">
//               <h3 className="font-display text-2xl font-normal mb-2" style={{ letterSpacing: '-0.02em' }}>Request a Pipeline Review</h3>
//               <div className="font-mono text-[11px] text-text-dim tracking-[0.1em] uppercase mb-9">45 min · free · no commitment</div>

//               {[['Full name', 'text', 'Your name', 'name'],
//                 ['Work email', 'email', 'you@company.com', 'email'],
//                 ['Company', 'text', 'Company name', 'company'],
//                 ['Your role', 'text', 'e.g. VP Sales, Founder, RevOps Lead', 'role']
//               ].map(([label, type, ph, key]) => (
//                 <div key={label} className="mb-6">
//                   <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">{label}</label>
//                   <input
//                     type={type}
//                     placeholder={ph}
//                     value={formData[key]}
//                     onChange={(e) => handleChange(key, e.target.value)}
//                     className="w-full py-3.5 px-4 bg-bg border border-border-strong text-text font-body text-[15px] font-light rounded outline-none focus:border-accent transition-colors"
//                   />
//                 </div>
//               ))}

//               <div className="mb-6">
//                 <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">Current stack</label>
//                 <div className="flex flex-wrap gap-3">
//                   {TOOLS.map(t => (
//                     <label key={t} className="flex items-center gap-2 py-2.5 px-4 border border-border-strong cursor-pointer text-[13px] text-text-muted bg-bg hover:border-accent-dim hover:text-text transition-all">
//                       <input
//                         type="checkbox"
//                         checked={formData.tools.includes(t)}
//                         onChange={() => handleToolChange(t)}
//                         className="accent-accent"
//                       />
//                       {t}
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">What is costing you pipeline right now?</label>
//                 <textarea
//                   placeholder="Describe the biggest bottleneck..."
//                   value={formData.message}
//                   onChange={(e) => handleChange('message', e.target.value)}
//                   className="w-full min-h-[120px] py-3.5 px-4 bg-bg border border-border-strong text-text font-body text-[15px] font-light rounded outline-none resize-y focus:border-accent transition-colors"
//                 />
//               </div>

//               <button
//                 className="w-full py-4 text-[16px] font-medium rounded-xl transition-all duration-300 bg-[#dcb479] text-white hover:bg-[#6f898b]"
//                 onClick={handleSubmit}
//                 disabled={loading}
//               >
//                 {loading ? 'Submitting...' : 'Request Pipeline Review & Join the waitlist'}
//               </button>

//               <div className="mt-8 p-10 border border-dashed border-border-strong text-center font-mono text-xs text-text-dim ">
//                 <a
//                   href="https://outlook.office.com/bookwithme/user/dec60d08e8404f9ea6632cfd3dc35aae@pravraha.com?anonymous&ismsaljsauthenabled&ep=pcard"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-8 px-16 py-4 rounded-lg text-white text-[16px] font-medium hover:opacity-90 transition bg-[#dcb479]"
//                 >
//                   Book a Meeting
//                 </a>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div></section>
//     </>
//   );
// }
import Reveal from '../components/Reveal';
import { useState } from 'react';
import axios from 'axios';
import ContactLayout from '../layouts/ContactLayout'; // ✅ FIXED PATH

const TOOLS = ['Apollo','ZoomInfo','Outreach','Salesloft','Clay','11x / Artisan','HubSpot','Salesforce','Other'];

export default function Book() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    tools: [],
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleToolChange = (tool) => {
    setFormData(prev => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter(t => t !== tool)
        : [...prev.tools, tool]
    }));
  };

  const validateForm = () => {
    const { name, email, company, role, tools, message } = formData;

    if (!name.trim()) return 'Full name is required';
    if (!email.trim()) return 'Email is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Enter a valid email';

    if (!company.trim()) return 'Company is required';
    if (!role.trim()) return 'Role is required';
    if (tools.length === 0) return 'Select at least one tool';
    if (!message.trim()) return 'Message is required';

    return null;
  };

  const handleSubmit = async () => {
    const error = validateForm();

    if (error) {
      alert(error);
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        'https://node.encleadus.cloud/lead/submit-query',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (res.status >= 200 && res.status < 300) {
        alert('Request submitted successfully!');

        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          tools: [],
          message: ''
        });
      } else {
        alert(res.data?.message || 'Something went wrong');
      }

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Server error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactLayout> {/* ✅ FIX ADDED */}
      <>
        <header className="page-hero"><div className="site-container">
          <div className="eyebrow">Book a Pipeline Review</div>
          <h1 className="font-display font-light" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
            Not a demo.<br /><span className="italic-serif">An architecture audit.</span>
          </h1>
        </div></header>

        <section className="border-t border-border py-[100px]"><div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <Reveal>
              <h2 className="font-display font-light mb-7" style={{ fontSize: 'clamp(30px,3.5vw,48px)', letterSpacing: '-0.025em', lineHeight: 1.08 }}>
                45 minutes. No slides. One working map of your pipeline system.
              </h2>
              <p className="text-[17px] text-text-muted font-light mb-10" style={{ lineHeight: 1.65 }}>
                This is an <strong className="text-text font-medium">architecture audit</strong> we examine your current outbound system, identify the seams costing you pipeline, and show you what autonomous revenue infrastructure looks like running on your ICP.
              </p>

              <div className="border border-border mb-10">
                {[['01', 'Stack audit.', 'We map your current tools, data sources, and execution model.'],
                  ['02', 'Signal assessment.', 'We evaluate what buying signals you track and how fast you act.'],
                  ['03', 'Architecture blueprint.', 'We show your outbound system as unified infrastructure.']
                ].map(([n, t, d]) => (
                  <div key={n} className="p-5 border-b border-border last:border-b-0 grid grid-cols-[32px_1fr] gap-4">
                    <div className="font-mono text-[11px] text-accent pt-1">{n}</div>
                    <div className="text-[15px] text-text-muted font-light" style={{ lineHeight: 1.6 }}>
                      <strong className="text-text font-medium">{t}</strong> {d}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-7 border border-dashed border-accent-dim font-mono text-xs text-accent tracking-wide" style={{ lineHeight: 1.7, background: 'rgba(232,168,75,0.03)' }}>
                This is not a demo. We do not show slides. We do not pitch features.<br /><br />
                We audit your system and show you what infrastructure replaces.
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-border bg-bg-elevated p-12">
                <h3 className="font-display text-2xl font-normal mb-2" style={{ letterSpacing: '-0.02em' }}>Request a Pipeline Review</h3>
                <div className="font-mono text-[11px] text-text-dim tracking-[0.1em] uppercase mb-9">45 min · free · no commitment</div>

                {[['Full name', 'text', 'Your name', 'name'],
                  ['Work email', 'email', 'you@company.com', 'email'],
                  ['Company', 'text', 'Company name', 'company'],
                  ['Your role', 'text', 'e.g. VP Sales, Founder, RevOps Lead', 'role']
                ].map(([label, type, ph, key]) => (
                  <div key={label} className="mb-6">
                    <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">{label}</label>
                    <input
                      type={type}
                      placeholder={ph}
                      value={formData[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="w-full py-3.5 px-4 bg-bg border border-border-strong text-text font-body text-[15px] font-light rounded outline-none focus:border-accent transition-colors"
                    />
                  </div>
                ))}

                <div className="mb-6">
                  <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">Current stack</label>
                  <div className="flex flex-wrap gap-3">
                    {TOOLS.map(t => (
                      <label key={t} className="flex items-center gap-2 py-2.5 px-4 border border-border-strong cursor-pointer text-[13px] text-text-muted bg-bg hover:border-accent-dim hover:text-text transition-all">
                        <input
                          type="checkbox"
                          checked={formData.tools.includes(t)}
                          onChange={() => handleToolChange(t)}
                          className="accent-accent"
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block font-mono text-[11px] text-text-muted tracking-[0.1em] uppercase mb-2.5">What is costing you pipeline right now?</label>
                  <textarea
                    placeholder="Describe the biggest bottleneck..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="w-full min-h-[120px] py-3.5 px-4 bg-bg border border-border-strong text-text font-body text-[15px] font-light rounded outline-none resize-y focus:border-accent transition-colors"
                  />
                </div>

                <button
                  className="w-full py-4 text-[16px] font-medium rounded-xl transition-all duration-300 bg-[#dcb479] text-white hover:bg-[#6f898b]"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Request Pipeline Review & Join the waitlist'}
                </button>

                <div className="mt-8 p-10 border border-dashed border-border-strong text-center font-mono text-xs text-text-dim ">
                  <a
                    href="https://outlook.office.com/bookwithme/user/dec60d08e8404f9ea6632cfd3dc35aae@pravraha.com?anonymous&ismsaljsauthenabled&ep=pcard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 px-16 py-4 rounded-lg text-white text-[16px] font-medium hover:opacity-90 transition bg-[#dcb479]"
                  >
                    Book a Meeting
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div></section>
      </>
    </ContactLayout>
  );
}
// import Reveal from '../components/Reveal';
// import { useState } from 'react';
// import axios from 'axios';
// import ContactLayout from '../layouts/ContactLayout'; // ✅ FIXED PATH

// const TOOLS = ['Apollo','ZoomInfo','Outreach','Salesloft','Clay','11x / Artisan','HubSpot','Salesforce','Other'];

// export default function Book() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     role: '',
//     tools: [],
//     message: ''
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleToolChange = (tool) => {
//     setFormData(prev => ({
//       ...prev,
//       tools: prev.tools.includes(tool)
//         ? prev.tools.filter(t => t !== tool)
//         : [...prev.tools, tool]
//     }));
//   };

//   const validateForm = () => {
//     const { name, email, company, role, tools, message } = formData;

//     if (!name.trim()) return 'Full name is required';
//     if (!email.trim()) return 'Email is required';

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) return 'Enter a valid email';

//     if (!company.trim()) return 'Company is required';
//     if (!role.trim()) return 'Role is required';
//     if (tools.length === 0) return 'Select at least one tool';
//     if (!message.trim()) return 'Message is required';

//     return null;
//   };

//   const handleSubmit = async () => {
//     const error = validateForm();
//     if (error) return alert(error);

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         'https://node.pravraha.com/landingpage/submit-query',
//         formData,
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       if (res.status >= 200 && res.status < 300) {
//         alert('Request submitted successfully!');
//         setFormData({
//           name: '', email: '', company: '', role: '', tools: [], message: ''
//         });
//       } else {
//         alert(res.data?.message || 'Something went wrong');
//       }

//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || 'Server error. Try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ContactLayout>
//       {/* your existing JSX unchanged */}
//     </ContactLayout>
//   );
// }