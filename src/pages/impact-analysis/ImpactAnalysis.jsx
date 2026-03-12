import {
  FolderOpen,
  FileText,
  Clock,
  TrendingUp,
  BarChart2,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  FileEdit,
  Eye,
  ArrowUpRight,
  SquarePen,
  Database,
} from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";
import ChartImg from "../../assets/BarLineChart.png";

/* ── Stat card ── */
const PolicyCard = ({
  icon: Icon,
  title,
  pera,
  PolicyTag,
  affectedProcesses,
}) => (
  <div className={`rounded-sm border p-6 flex flex-col shadow-dashCard transition-shadow hover:shadow-lg
  justify-between ${PolicyTag === 'High'  ? 'bg-[#FFEDED] border-[#FF383C]' : PolicyTag === 'Medium' ? 'bg-[#FFF4E0] border-[#FF9500]' : 'bg-[#ECFDF3] border-[#34C759]'}`}
  >
    {/* Icon section */}
    <div className=" flex flex-col justify-between space-y-4">
      <div className=" flex justify-between space-y-4">
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-md">
          <Icon className="w-8 h-8 text-[#006DFF]" />
        </div>
        <span className={`inline-flex text-sm rounded-full font-semibold self-center px-4 py-1 text-white ${PolicyTag === 'High'
  ? 'bg-[#FF383C]'
  : PolicyTag === 'Medium'
  ? 'bg-[#FF9500]'
  : 'bg-[#34C759]'}`}>{PolicyTag}</span>
      </div>
    
      <h2 className="text-2xl font-bold text-[#051C48]">{title}</h2>
    <p className=" text-[#3D3D3D] leading-relaxed">{pera}</p>
  </div>


    {/* Bottom badge section */}
    <div className="pt-3 ">
      <span className="py-2 px-4 border border-[#051C48] text-[#051C48] rounded-sm font-medium bg-white hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2">
       affected processes {affectedProcesses} <ArrowUpRight size={20} />
      </span>
      
    </div>

  </div>
);

const RegulatoryPoliciesIcon = ({ className }) => (
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_282_9213)">
<path d="M38.9596 22.9336H24.793C24.4513 22.9336 24.168 23.2169 24.168 23.5586C24.168 28.0253 27.6263 31.6669 31.8763 31.6669C36.1263 31.6669 39.5846 28.0336 39.5846 23.5586C39.5846 23.2086 39.3013 22.9336 38.9596 22.9336Z" fill="#FF383C"/>
<path d="M15.2096 22.9336H1.04297C0.701302 22.9336 0.417969 23.2169 0.417969 23.5586C0.417969 28.0253 3.8763 31.6669 8.1263 31.6669C12.3763 31.6669 15.8346 28.0253 15.8346 23.5586C15.8346 23.2086 15.5513 22.9336 15.2096 22.9336Z" fill="#FF383C"/>
<path d="M23.6492 34.5744C23.4992 33.8994 22.9076 33.3827 22.1909 33.3577L21.7159 6.29935L31.0326 8.13268L24.9492 21.6744H26.3242L31.8826 9.30768L37.4409 21.6744H38.8159L32.6826 8.06602L36.8076 6.78268L36.4326 5.59102L31.8326 7.02435L21.9992 5.08268C22.4659 4.58268 22.7659 3.92435 22.7659 3.18268C22.7659 1.65768 21.5242 0.416016 19.9992 0.416016C18.4742 0.416016 17.2326 1.65768 17.2326 3.18268C17.2326 3.92435 17.5242 4.59102 17.9992 5.08268L8.15755 7.04935L3.56589 5.59102L3.18255 6.78268L7.29922 8.09102L1.19922 21.6827H2.57422L8.13255 9.31602L13.6909 21.6827H15.0659L8.98255 8.16602L18.2909 6.30768L17.8159 33.366C17.0992 33.391 16.5076 33.8993 16.3576 34.5827C9.55755 34.8493 6.10755 35.6827 6.10755 37.0494C6.10755 39.4077 16.7492 39.591 20.0159 39.591C23.2826 39.591 33.9242 39.4077 33.9242 37.0494C33.9076 35.6744 30.4492 34.8494 23.6492 34.5744Z" fill="#FF383C"/>
</g>
<defs>
<clipPath id="clip0_282_9213">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
);

const InternalPoliciesIcon = ({ className }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.6654 35.418H3.33203C2.64203 35.418 2.08203 35.978 2.08203 36.668C2.08203 37.358 2.64203 37.918 3.33203 37.918H36.6654C37.3554 37.918 37.9154 37.358 37.9154 36.668C37.9154 35.978 37.3554 35.418 36.6654 35.418Z" fill="#FF9500"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.4987 37.9173C21.8087 37.9173 21.2487 37.3573 21.2487 36.6673V25.834C21.2487 25.2807 21.4687 24.7523 21.8587 24.3607C22.2504 23.9707 22.7804 23.7507 23.332 23.7507H28.332C28.8837 23.7507 29.4137 23.9707 29.8054 24.3607C30.1954 24.7523 30.4154 25.2807 30.4154 25.834V36.6673C30.4154 37.3573 29.8554 37.9173 29.1654 37.9173H33.332C34.022 37.9173 34.582 37.3573 34.582 36.6673V5.00065C34.582 4.22732 34.2754 3.48565 33.727 2.93898C33.1804 2.39065 32.4387 2.08398 31.6654 2.08398C28.7787 2.08398 22.8854 2.08398 19.9987 2.08398C19.2254 2.08398 18.4837 2.39065 17.937 2.93898C17.3887 3.48565 17.082 4.22732 17.082 5.00065V36.6673C17.082 37.3573 17.642 37.9173 18.332 37.9173H22.4987ZM23.7487 27.084C23.7487 26.8623 23.837 26.6507 23.992 26.494C24.1487 26.339 24.3604 26.2507 24.582 26.2507H27.082C27.542 26.2507 27.9154 26.624 27.9154 27.084V35.4173H23.7487C23.7487 35.4173 23.7487 29.344 23.7487 27.084ZM24.582 19.584H27.082C27.772 19.584 28.332 19.024 28.332 18.334C28.332 17.644 27.772 17.084 27.082 17.084H24.582C23.892 17.084 23.332 17.644 23.332 18.334C23.332 19.024 23.892 19.584 24.582 19.584ZM24.582 14.584H27.082C27.772 14.584 28.332 14.024 28.332 13.334C28.332 12.644 27.772 12.084 27.082 12.084H24.582C23.892 12.084 23.332 12.644 23.332 13.334C23.332 14.024 23.892 14.584 24.582 14.584ZM24.582 9.58398H27.082C27.772 9.58398 28.332 9.02398 28.332 8.33398C28.332 7.64398 27.772 7.08398 27.082 7.08398H24.582C23.892 7.08398 23.332 7.64398 23.332 8.33398C23.332 9.02398 23.892 9.58398 24.582 9.58398Z" fill="#FF9500"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.418 12.084V36.6673C15.418 37.114 15.518 37.539 15.698 37.9173H6.66797C5.97797 37.9173 5.41797 37.3573 5.41797 36.6673V15.0007C5.41797 13.389 6.72464 12.084 8.33464 12.084H15.418ZM9.58464 31.2507H12.0846C12.7746 31.2507 13.3346 30.6907 13.3346 30.0007C13.3346 29.3107 12.7746 28.7507 12.0846 28.7507H9.58464C8.89464 28.7507 8.33464 29.3107 8.33464 30.0007C8.33464 30.6907 8.89464 31.2507 9.58464 31.2507ZM9.58464 26.2507H12.0846C12.7746 26.2507 13.3346 25.6907 13.3346 25.0007C13.3346 24.3107 12.7746 23.7507 12.0846 23.7507H9.58464C8.89464 23.7507 8.33464 24.3107 8.33464 25.0007C8.33464 25.6907 8.89464 26.2507 9.58464 26.2507ZM9.58464 21.2507H12.0846C12.7746 21.2507 13.3346 20.6907 13.3346 20.0007C13.3346 19.3107 12.7746 18.7507 12.0846 18.7507H9.58464C8.89464 18.7507 8.33464 19.3107 8.33464 20.0007C8.33464 20.6907 8.89464 21.2507 9.58464 21.2507Z" fill="#FF9500"/>
</svg>

);
const CompliancePoliciesIcon = ({className}) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.218 21.8671C34.7534 21.4913 33.334 20.9576 31.9846 20.2754C31.568 20.0671 31.1846 19.8671 30.8346 19.6754C30.143 19.2921 29.593 18.9504 29.2346 18.7171C29.2142 18.7027 29.1917 18.6915 29.168 18.6838C28.9038 18.5298 28.6024 18.4515 28.2966 18.4573C27.9909 18.4632 27.6927 18.5531 27.4346 18.7171C25.2845 20.1232 22.9285 21.1859 20.4513 21.8671C20.0866 21.9557 19.7621 22.1639 19.5295 22.4584C19.2969 22.7529 19.1696 23.1168 19.168 23.4921V24.9171C19.1671 26.9751 19.6748 29.0014 20.646 30.8158C21.6172 32.6302 23.0217 34.1765 24.7346 35.3171L25.5096 35.8338L27.4096 37.1004C27.5603 37.1997 27.7264 37.2729 27.9013 37.3171H27.9096C28.0463 37.3642 28.1901 37.3868 28.3346 37.3838C28.6639 37.381 28.9853 37.2825 29.2596 37.1004L31.9346 35.3171C33.6476 34.1765 35.0521 32.6302 36.0233 30.8158C36.9945 29.0014 37.5022 26.9751 37.5013 24.9171V23.4921C37.4996 23.1168 37.3723 22.7529 37.1398 22.4584C36.9072 22.1639 36.5826 21.9557 36.218 21.8671ZM31.4263 26.4254L28.093 29.7588C27.935 29.9137 27.7226 30.0005 27.5013 30.0005C27.28 30.0005 27.0676 29.9137 26.9096 29.7588L25.243 28.0921C25.0861 27.9352 24.9979 27.7224 24.9979 27.5004C24.9979 27.2785 25.0861 27.0657 25.243 26.9088C25.3999 26.7519 25.6127 26.6637 25.8346 26.6637C26.0566 26.6637 26.2694 26.7519 26.4263 26.9088L27.5013 27.9921L30.243 25.2421C30.3207 25.1644 30.4129 25.1028 30.5144 25.0607C30.6159 25.0187 30.7248 24.997 30.8346 24.997C30.9445 24.997 31.0533 25.0187 31.1548 25.0607C31.2564 25.1028 31.3486 25.1644 31.4263 25.2421C31.504 25.3198 31.5656 25.4121 31.6077 25.5136C31.6497 25.6151 31.6714 25.7239 31.6714 25.8338C31.6714 25.9437 31.6497 26.0525 31.6077 26.154C31.5656 26.2555 31.504 26.3477 31.4263 26.4254Z" fill="#10B981"/>
<path d="M29.65 11.0333L22.525 3.74999C22.2693 3.4912 21.9807 3.26707 21.6667 3.08332V9.16665C21.6686 9.82909 21.9327 10.4638 22.4011 10.9322C22.8695 11.4006 23.5042 11.6647 24.1667 11.6667H30.1583C30.008 11.4409 29.8379 11.2289 29.65 11.0333ZM30.7833 13.3333H24.1667C23.0616 13.3333 22.0018 12.8943 21.2204 12.1129C20.439 11.3315 20 10.2717 20 9.16665V2.53332C19.8512 2.50979 19.7007 2.49864 19.55 2.49999H6.66667C5.5616 2.49999 4.50179 2.93897 3.72039 3.72037C2.93899 4.50178 2.5 5.56158 2.5 6.66665V33.3333C2.5 34.4384 2.93899 35.4982 3.72039 36.2796C4.50179 37.061 5.5616 37.5 6.66667 37.5H25.0083L23.8083 36.7C21.8667 35.4084 20.2746 33.6567 19.1739 31.6008C18.0733 29.5449 17.4982 27.2486 17.5 24.9167V23.4917C17.5003 22.9763 17.6201 22.468 17.85 22.0067C18.0799 21.5455 18.4137 21.1438 18.825 20.8333H8.33333C8.11232 20.8333 7.90036 20.7455 7.74408 20.5892C7.5878 20.433 7.5 20.221 7.5 20C7.5 19.779 7.5878 19.567 7.74408 19.4107C7.90036 19.2544 8.11232 19.1667 8.33333 19.1667H23.1167C24.2967 18.6345 25.4359 18.0162 26.525 17.3167C27.0136 17.0062 27.574 16.8271 28.1521 16.7964C28.7301 16.7657 29.3063 16.8847 29.825 17.1417L29.8833 17.1667L30.1333 17.3167C30.3083 17.4333 30.5417 17.575 30.8333 17.75V13.95C30.8336 13.7434 30.8169 13.5372 30.7833 13.3333ZM17.5 30C17.5 30.221 17.4122 30.433 17.2559 30.5892C17.0996 30.7455 16.8877 30.8333 16.6667 30.8333H8.33333C8.11232 30.8333 7.90036 30.7455 7.74408 30.5892C7.5878 30.433 7.5 30.221 7.5 30C7.5 29.779 7.5878 29.567 7.74408 29.4107C7.90036 29.2544 8.11232 29.1667 8.33333 29.1667H16.6667C16.8877 29.1667 17.0996 29.2544 17.2559 29.4107C17.4122 29.567 17.5 29.779 17.5 30ZM8.33333 24.1667H15C15.221 24.1667 15.433 24.2544 15.5893 24.4107C15.7455 24.567 15.8333 24.779 15.8333 25C15.8333 25.221 15.7455 25.433 15.5893 25.5892C15.433 25.7455 15.221 25.8333 15 25.8333H8.33333C8.11232 25.8333 7.90036 25.7455 7.74408 25.5892C7.5878 25.433 7.5 25.221 7.5 25C7.5 24.779 7.5878 24.567 7.74408 24.4107C7.90036 24.2544 8.11232 24.1667 8.33333 24.1667ZM8.33333 9.16665H15C15.221 9.16665 15.433 9.25445 15.5893 9.41073C15.7455 9.56701 15.8333 9.77897 15.8333 9.99999C15.8333 10.221 15.7455 10.433 15.5893 10.5892C15.433 10.7455 15.221 10.8333 15 10.8333H8.33333C8.11232 10.8333 7.90036 10.7455 7.74408 10.5892C7.5878 10.433 7.5 10.221 7.5 9.99999C7.5 9.77897 7.5878 9.56701 7.74408 9.41073C7.90036 9.25445 8.11232 9.16665 8.33333 9.16665ZM20 15.8333H8.33333C8.11232 15.8333 7.90036 15.7455 7.74408 15.5892C7.5878 15.433 7.5 15.221 7.5 15C7.5 14.779 7.5878 14.567 7.74408 14.4107C7.90036 14.2544 8.11232 14.1667 8.33333 14.1667H20C20.221 14.1667 20.433 14.2544 20.5893 14.4107C20.7455 14.567 20.8333 14.779 20.8333 15C20.8333 15.221 20.7455 15.433 20.5893 15.5892C20.433 15.7455 20.221 15.8333 20 15.8333Z" fill="#10B981"/>
</svg>

)

const regulations = [
  {
    id: 1,
    date: "January 15, 2026",
    priority: "High",
    title: "Personal Data Protection Law",
    status: "warning",
    statusColor: "text-[#FF383C]",
    statusIcon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
    tags: ["Human Resources Management", "Customer Service", "Information Technology"],
  },
  {
    id: 2,
    date: "January 10, 2026",
    priority: "Medium",
    title: "Procurement Regulation Update",
    status: "success",
    statusColor: "text-[#FF9500]",
    statusIcon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tags: ["Procurement", "Finance", "Warehousing"],
  },
  {
    id: 3,
    date: "January 5, 2026",
    priority: "Low",
    title: "New Quality Standards",
    status: "success",
    statusColor: "text-[#34C759]",
    statusIcon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tags: ["Quality Assurance", "Production"],
  },
];
 
const priorityStyles = {
  High: "bg-red-500 text-white",
  Medium: "bg-orange-400 text-white",
  Low: "bg-green-500 text-white",
};
 
function RegulationCard({ reg }) {
 
  return (
    <div
      className={`bg-white rounded-sm border transition-all duration-200 cursor-pointer overflow-hidden  border-gray-200 shadow-form `}
    >
      <div className="p-4 sm:p-5">
        {/* Top row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 ">
          {/* Date */}
          <span className="text-sm lg:text-lg text-[#232529] w-full lg:max-w-40 truncate shrink-0">
            {reg.date}
          </span>
 
          {/* Priority Badge */}
          <div className="flex items-center justify-center w-full lg:max-w-28">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${priorityStyles[reg.priority]}`}>
            {reg.priority}
          </span>
          </div>
 
          {/* Title + Status Icon from dataset */}
          <div className="flex items-center gap-2 ">
            <span className="text-sm lg:text-lg font-bold text-[#232529] truncate">
              {reg.title}
            </span>
            <span className={`shrink-0 ${reg.statusColor}`}>
              {reg.statusIcon}
            </span>
          </div>
        </div>
 
        {/* Tags row */}
        <div className="mt-3 flex flex-wrap justify-end gap-2">
          {reg.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-[#303642] font-medium bg-[#E4E8E9] rounded-full px-3 py-[2px] whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
 
/* ════════════════════════════════════════════════
   Dashboard Page
════════════════════════════════════════════════ */
const ImpactAnalysis = () => {
  const PolicyCards = [
    {
      icon: RegulatoryPoliciesIcon,
      title: "Regulatory Policies",
      pera: "Changes in government regulations and laws that affect work procedures",
      affectedProcesses: "12",
      PolicyTag: "High"
    },
    
    {
      icon: InternalPoliciesIcon,
      title: "Internal Policies",
      pera: "Updates to internal organizational policies and procedures",
      affectedProcesses: "8",
      PolicyTag: "Medium"
    },
    
    {
      icon: CompliancePoliciesIcon,
      title: "Compliance Policies",
      pera: "New compliance and oversight requirements",
      affectedProcesses: "5",
      PolicyTag: "Low"
    },
    
  ];

  const headingStyle = "text-[#051C48] mb-6 font-bold text-lg lg:text-xl xl:text-2xl";

  return (
    <DashboardLayout>
      <div className="space-y-6 lg:space-y-10 ">
        {/* Page title */}
        <div>
          <h1 className="text-xl lg:text-3xl xl:text-[32px] font-bold text-[#051C48] mb-2">
            Policy Impact Analysis
          </h1>
          <p className="text-base text-[#3D3D3D]">Analyze how policy and regulatory changes affect your work processes</p>
        </div>

        {/* How it works info block */}
        <div className="bg-white rounded-sm border border-[#D5DAE2] p-6 flex shadow-dashCard transition-shadow hover:shadow-lg justify-between">
          
          <div>
            <h3 className="font-bold text-[#051C48] text-2xl mb-2">How does Impact Analysis work?</h3>
            <p className="text-base text-[#051C48] leading-relaxed">
              The system analyzes changes in new policies and regulations and compares them with current work procedures to identify affected processes and  required modifications. This helps you maintain compliance and  proactively update your procedures.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="bg-blue-50 p-5 inline-flex rounded-full">
              <Database className="w-6 h-6 text-blue-600" />
            </span>
          </div>
        </div>




        <div>
          <h2 className={headingStyle}>Policy Categories</h2>
          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {PolicyCards.map((s) => (
              <PolicyCard key={s.label} {...s} />
            ))}
          </div>
        </div>

       
          <div className="w-full space-y-4">
        {regulations.map((reg) => (
          <RegulationCard key={reg.id} reg={reg} />
        ))}
      </div>
        


        <div className="bg-white rounded-sm border border-[#D5DAE2] p-6 shadow-dashCard transition-shadow hover:shadow-lg justify-between">
          
           <div className="flex flex-col items-center justify-center py-10 gap-5 md:min-h-[510px] bg-[#F7F8F9] px-4">
              <div className="w-20 h-20 bg-white flex items-center justify-center rounded-full text-[#8140B0]">
                <TrendingUp className="size-7" />
              </div>
              <h3 className="text-[#303642] md:text-lg lg:text-2xl font-semibold">
                Coming Soon
              </h3>
              <p className="text-[#303642] text-center">
                Advanced features for automatic impact analysis and policy-procedure comparison will be added soon
              </p>
            </div>
        </div>



      </div>
    </DashboardLayout>
  );
};

export default ImpactAnalysis;
