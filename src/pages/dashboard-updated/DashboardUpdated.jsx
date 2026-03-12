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
} from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";
import ChartImg from "../../assets/BarLineChart.png";

/* ── Stat card ── */
const StatCard = ({
  icon: Icon,
  value,
  pera,
  bottomText,
}) => (
  <div className="bg-white rounded-sm border border-[#D5DAE2] p-6 flex flex-col shadow-dashCard transition-shadow hover:shadow-lg
  justify-between
  ">
    {/* Icon section */}
    <div className=" flex flex-col justify-between space-y-4">
    <div className=" flex items-center gap-4">
    <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-md">
      <Icon className="w-8 h-8 text-[#006DFF]" />
    </div>
    {/* Content section */}
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-bold text-[#051C48]">{value}</p>
    </div>
    </div>
    <p className=" text-[#3D3D3D] leading-relaxed">{pera}</p>
  </div>


    {/* Bottom badge section */}
    <div className="pt-3 ">
      <span className="text-sm font-semibold text-[#B56A00] bg-amber-50 px-3 py-2 rounded inline-block">
        {bottomText}
      </span>
      {/* Action buttons */}
      <div className="flex gap-3 pt-2">
        <button className="flex-1 py-2 px-3 bg-[#051C48] text-white rounded-sm font-medium hover:bg-[#0a2340] transition-colors flex items-center justify-center gap-2">
          <SquarePen size={20} />
          Edit
        </button>
        <button className="flex-1 py-2 px-3 border border-[#051C48] text-[#051C48] rounded-sm font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
          <Eye size={20} />
          Preview
        </button>
      </div>
    </div>

  </div>
);

const ImpactAnalysisIcon = ({ className }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2.625 1.875V21.375H22.125V22.125H3C2.70163 22.125 2.41508 22.0069 2.2041 21.7959C1.99312 21.5849 1.875 21.2984 1.875 21V1.875H2.625Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.75"
    />
    <path
      d="M22.5 6.75H17.25V8.25H19.9425L14.25 13.9425L11.0325 10.7175C10.9628 10.6472 10.8798 10.5914 10.7884 10.5533C10.697 10.5153 10.599 10.4957 10.5 10.4957C10.401 10.4957 10.303 10.5153 10.2116 10.5533C10.1202 10.5914 10.0372 10.6472 9.9675 10.7175L4.5 16.1925L5.5575 17.25L10.5 12.3075L13.7175 15.5325C13.7872 15.6028 13.8702 15.6586 13.9616 15.6967C14.053 15.7347 14.151 15.7543 14.25 15.7543C14.349 15.7543 14.447 15.7347 14.5384 15.6967C14.6298 15.6586 14.7128 15.6028 14.7825 15.5325L21 9.3075V12H22.5V6.75Z"
      fill="currentColor"
    />
  </svg>
);

const MyProjectsIcon = ({ className }) => (
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5714 22.8572H10V24.5715H14.5714V22.8572ZM1.71429 14.5715V10.0001H1.44661e-06V14.5715H1.71429ZM22.8571 14.0721V14.5715H24.5714V14.0721H22.8571ZM15.5897 3.84121L20.1143 7.91321L21.2606 6.63778L16.7371 2.56578L15.5897 3.84121ZM24.5714 14.0721C24.5714 12.1418 24.5886 10.9189 24.1029 9.82635L22.536 10.5246C22.84 11.2081 22.8571 11.9909 22.8571 14.0721H24.5714ZM20.1143 7.91321C21.6606 9.30521 22.232 9.84235 22.536 10.5246L24.1029 9.82635C23.616 8.73263 22.696 7.92921 21.2606 6.63778L20.1143 7.91321ZM10.0343 1.71435C11.8423 1.71435 12.5246 1.72806 13.1314 1.96121L13.7463 0.361207C12.7726 -0.0136506 11.712 6.37548e-05 10.0343 6.37548e-05V1.71435ZM16.7371 2.56692C15.496 1.45035 14.72 0.733778 13.7463 0.361207L13.1326 1.96121C13.7406 2.19435 14.2526 2.63778 15.5897 3.84121L16.7371 2.56692ZM10 22.8572C7.82057 22.8572 6.27314 22.8549 5.09714 22.6972C3.94857 22.5429 3.28572 22.2526 2.80229 21.7692L1.59086 22.9806C2.44572 23.8378 3.53029 24.2161 4.86972 24.3966C6.184 24.5738 7.86971 24.5715 10 24.5715V22.8572ZM1.44661e-06 14.5715C1.44661e-06 16.7018 -0.00228427 18.3863 0.174859 19.7018C0.35543 21.0412 0.734859 22.1258 1.58972 22.9818L2.80114 21.7703C2.31886 21.2858 2.02857 20.6229 1.87429 19.4732C1.71657 18.2995 1.71429 16.7509 1.71429 14.5715H1.44661e-06ZM14.5714 24.5715C16.7017 24.5715 18.3863 24.5738 19.7017 24.3966C21.0411 24.2161 22.1257 23.8366 22.9817 22.9818L21.7703 21.7703C21.2857 22.2526 20.6229 22.5429 19.4731 22.6972C18.2994 22.8549 16.7509 22.8572 14.5714 22.8572V24.5715ZM22.8571 14.5715C22.8571 16.7509 22.8549 18.2995 22.6971 19.4743C22.5429 20.6229 22.2526 21.2858 21.7691 21.7692L22.9806 22.9806C23.8377 22.1258 24.216 21.0412 24.3966 19.7018C24.5737 18.3875 24.5714 16.7018 24.5714 14.5715H22.8571ZM1.71429 10.0001C1.71429 7.82063 1.71657 6.27321 1.87429 5.09721C2.02857 3.94864 2.31886 3.28578 2.80229 2.80235L1.59086 1.59092C0.733716 2.44578 0.35543 3.53035 0.174859 4.86978C-0.00228427 6.18406 1.44661e-06 7.86978 1.44661e-06 10.0001H1.71429ZM10.0343 6.37548e-05C7.89143 6.37548e-05 6.19886 -0.00222196 4.87886 0.174921C3.53372 0.355492 2.44572 0.734921 1.58972 1.58978L2.80114 2.80121C3.28572 2.31892 3.94972 2.02864 5.10629 1.87435C6.28686 1.71664 7.84343 1.71435 10.0343 1.71435V6.37548e-05Z" fill="#006DFF"/>
<path d="M5.42847 15.1428H14.5713M5.42847 19.1428H11.7142" stroke="#006DFF" stroke-width="1.71429" stroke-linecap="round"/>
<path d="M13.4285 1.42859V4.28573C13.4285 6.97945 13.4285 8.32687 14.265 9.16345C15.1016 10 16.449 10 19.1428 10H23.7142" stroke="#006DFF" stroke-width="1.71429"/>
</svg>

);

const PendingIcon = ({ className }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 3.66669C12.729 3.66669 9.59199 4.96609 7.27904 7.27904C4.96609 9.59199 3.66669 12.729 3.66669 16C3.66669 19.271 4.96609 22.4081 7.27904 24.721C9.59199 27.034 12.729 28.3334 16 28.3334C19.271 28.3334 22.4081 27.034 24.721 24.721C27.034 22.4081 28.3334 19.271 28.3334 16C28.3334 12.729 27.034 9.59199 24.721 7.27904C22.4081 4.96609 19.271 3.66669 16 3.66669ZM1.66669 16C1.66669 8.08402 8.08402 1.66669 16 1.66669C23.916 1.66669 30.3334 8.08402 30.3334 16C30.3334 23.916 23.916 30.3334 16 30.3334C8.08402 30.3334 1.66669 23.916 1.66669 16ZM16 9.66669C16.2652 9.66669 16.5196 9.77204 16.7071 9.95958C16.8947 10.1471 17 10.4015 17 10.6667V15.5867L20.04 18.6267C20.1383 18.7182 20.2171 18.8286 20.2717 18.9513C20.3264 19.074 20.3558 19.2064 20.3581 19.3407C20.3605 19.4749 20.3358 19.6083 20.2855 19.7328C20.2352 19.8573 20.1604 19.9704 20.0654 20.0654C19.9704 20.1604 19.8573 20.2352 19.7328 20.2855C19.6083 20.3358 19.4749 20.3605 19.3407 20.3581C19.2064 20.3558 19.074 20.3264 18.9513 20.2717C18.8286 20.2171 18.7182 20.1383 18.6267 20.04L15.2934 16.7067C15.1058 16.5193 15.0003 16.2651 15 16V10.6667C15 10.4015 15.1054 10.1471 15.2929 9.95958C15.4805 9.77204 15.7348 9.66669 16 9.66669Z"
      fill="currentColor"
    />
  </svg>
);

const GeneratedProceduresIcon = ({ className }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 6V25.9905"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
    />
    <path
      d="M28 12V26"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 2H18"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 30H24"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
    />
    <path
      d="M28 26C28.0109 27.9977 26 30 24 30"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 26C4 28 6 30 8 30"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 5.99609C4 3.999 6 2.04354 8 1.999"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.9891 12.009L18 2"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 8C18.0061 9.98912 20.0081 12 22 12"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 8V2"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 12H28"
      stroke="currentColor"
      stroke-width="1.999"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 26H14"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 22H18"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 18H14"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ReportIcon = ({className}) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 17V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 17V5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 17V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

const CheckedIcon = ({className}) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>

<path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011M22 4.00011L12 14.0101L9.00001 11.0101" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>

</svg>
)

/* ── Progress bar ── */
const ProgressBar = ({ label, pct, color }) => (
  <div className="flex-1 min-w-[140px]">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <span className={`text-sm font-semibold ${color}`}>{pct}%</span>
    </div>
    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ${color.replace("text-", "bg-")}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  </div>
);

const ApprovalRow = ({ label, count, dotColor, barColor }) => {
  const maxCount = 5; // based on your data, max is 5
  const pct = maxCount > 0 ? Math.min((count / maxCount) * 100, 100) : 0;

  return (
    <div className="py-3 space-y-3">
      <div className="flex justify-between items-center">
        {/* Count */}
        <span className="text-sm font-semibold text-[#051C48] w-4 text-right flex-shrink-0">
          {count}
        </span>

        {/* Dot + Label */}
        <div className="flex items-center gap-1.5 w-44 flex-shrink-0 justify-end">
          <span
            className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${dotColor}`}
          />
          <span className="text-sm text-[#3D3D3D]">{label}</span>
        </div>
      </div>
      {/* Bar */}
      <div className="flex-1 h-2 rounded-full bg-[#F0F2F5] overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

/* ── Guide item ── */
const GuideItem = ({ title, version }) => (
  <div className="flex items-center gap-3 bg-[#F7F8F9] p-4">
    <div className="w-14 h-14 rounded-sm bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
      <GeneratedProceduresIcon className="text-[#006DFF] w-6 h-6" />
    </div>
    <div className="min-w-0">
      <p className=" font-bold text-[#303642] ">
        {title}
      </p>
      <p className=" text-[#303642] mt-2">{version}</p>
    </div>
  </div>
);

/* ── Activity row ── */
const ActivityRow = ({ user, time, action }) => (
  <div className="flex items-center flex-wrap sm:gap-4 gap-2 bg-[#F7F8F9] p-4">
    <div className="w-14 h-14 rounded-sm bg-white flex items-center justify-center flex-shrink-0">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12H19.52C19.083 11.9991 18.6577 12.1413 18.3091 12.405C17.9606 12.6686 17.708 13.0392 17.59 13.46L15.24 21.82C15.2249 21.8719 15.1933 21.9175 15.15 21.95C15.1067 21.9825 15.0541 22 15 22C14.9459 22 14.8933 21.9825 14.85 21.95C14.8067 21.9175 14.7751 21.8719 14.76 21.82L9.24 2.18C9.22485 2.12807 9.19327 2.08246 9.15 2.05C9.10673 2.01754 9.05409 2 9 2C8.94591 2 8.89327 2.01754 8.85 2.05C8.80673 2.08246 8.77515 2.12807 8.76 2.18L6.41 10.54C6.29246 10.9592 6.04138 11.3285 5.69486 11.592C5.34835 11.8555 4.92532 11.9988 4.49 12H2" stroke="#006DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div className="flex items-center flex-wrap sm:gap-3 gap-1 text-[#303642] flex-1 min-w-28">
      <div className="w-1 h-1 rounded-full bg-[#303642] lg:inline-block hidden"></div>
      <span className="font-medium text-slate-700">{user}</span>
      <div className="w-1 h-1 rounded-full bg-[#303642] lg:inline-block hidden"></div>
      <span className="">{time}</span>
    </div>
    <span className="text-[#303642] max-w-fit">
      <span className="font-medium">{action}</span> - {user}
    </span>
  </div>
);

/* ── Status config ── */
const STATUS_CONFIG = {
  "Stakeholder Review": { dot: "bg-violet-500",  badge: "Stakeholder Review" },
  "Draft":              { dot: "bg-amber-400",   badge: "Draft" },
  "Approved":           { dot: "bg-emerald-500", badge: "Approved" },
  "Pending Review":     { dot: "bg-blue-400",    badge: "Pending Review" },
};

/* ── Procedure Card ── */
const ProcedureCard = ({ title, status = "Draft", daysActive = 0 }) => {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG["Draft"];

  return (
    <div className=" bg-[#F7F8F9] border border-[#EFF1F2] rounded-sm p-4 flex flex-col justify-between gap-4 min-h-[120px]">
      {/* Top row: dot + title */}
      <div className="flex items-start gap-2">
        <span className={`mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
        <p className="font-medium text-[#051C48] leading-snug">{title}</p>
      </div>

      {/* Badge */}
      <div>
        <span className="inline-block bg-white border border-[#051C48] rounded-sm px-3 py-1 text-sm font-medium text-[#051C48]">
          {cfg.badge}
        </span>
      </div>

      {/* Footer: clock + days active */}
      <div className="flex items-center justify-end gap-2 text-[#3D3D3D]">
        <Clock size={20} className="text-black" />
        <span>{daysActive} days active</span>
      </div>
    </div>
  );
};

/* ── Circular Progress ── */
const CircularProgress = ({ label, pct, value, color, bgColor }) => {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 flex-1 min-w-[80px]">
      <div className="relative w-24 md:w-28 h-24 md:h-w-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 72 72">
          {/* Background track */}
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="6"
          />
          {/* Progress arc */}
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={`${color} transition-all duration-700`}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-sm lg:text-lg font-semibold`}>{pct}%</span>
          <span className={`text-sm `}>{value}</span>
        </div>
      </div>
      <span className="text-base font-medium text-[#1A1A1A] text-center">
        {label}
      </span>
    </div>
  );
};

/* ════════════════════════════════════════════════
   Dashboard Page
════════════════════════════════════════════════ */
const DashboardUpdated = () => {
  const stats = [
    {
      icon: MyProjectsIcon,
      value: "Standard Template",
      pera: "A comprehensive template including all essential procedure sections",
      bottomText: "1/10 Sections"
    },
    
    {
      icon: MyProjectsIcon,
      value: "Standard Template",
      pera: "A simplified template focusing on key sections only",
      bottomText: "1/10 Sections"
    },
    
    {
      icon: MyProjectsIcon,
      value: "Detailed Template",
      pera: "A detailed template including all sections and granular details",
      bottomText: "1/10 Sections"
    },
    
  ];

  const progressBars = [
    { label: "Completed", pct: 78, color: "text-emerald-500", value: 6 },
    { label: "Processing", pct: 38, color: "text-violet-500", value: 0 },
    { label: "Pending", pct: 46, color: "text-amber-500", value: 0 },
    { label: "Draft", pct: 22, color: "text-blue-500", value: 2 },
  ];

  const approvals = [
    {
      label: "Draft",
      count: 3,
      dotColor: "bg-gray-400",
      barColor: "bg-emerald-500",
    },
    {
      label: "Pending Review",
      count: 0,
      dotColor: "bg-amber-400",
      barColor: "bg-emerald-500",
    },
    {
      label: "Under Review",
      count: 0,
      dotColor: "bg-violet-400",
      barColor: "bg-emerald-500",
    },
    {
      label: "Approved",
      count: 5,
      dotColor: "bg-emerald-500",
      barColor: "bg-emerald-500",
    },
    {
      label: "Changes Requested",
      count: 0,
      dotColor: "bg-red-500",
      barColor: "bg-emerald-500",
    },
  ];

  const guides = [
    {
      title: "Preparing the General Administration Budget",
      version: "Version 1.5",
    },
    {
      title: "Preparing the General Administration Budget",
      version: "Version 2.0",
    },
    {
      title: "Preparation of the Annual Operational Plan Budget",
      version: "Version 2.5",
    },
  ];

const procedures = [
  { title: "Preparation of the Annual Operational Plan Budget", status: "Stakeholder Review", daysActive: 0 },
  { title: "Human Resource",                                    status: "Draft",              daysActive: 0 },
  { title: "Human Resource",                                    status: "Draft",              daysActive: 0 },
  { title: "Preparing the General Administration Buget",        status: "Draft",              daysActive: 0 },
];

  const activities = Array(7).fill({
    user: "Mukul Sharma",
    time: "34 minutes ago",
    action: "Profile Update",
  });

  const headingStyle = "text-[#051C48] mb-6 font-bold text-lg lg:text-xl xl:text-2xl";

  return (
    <DashboardLayout>
      <div className="space-y-6 lg:space-y-10 ">
        {/* Page title */}
        <div>
          <h1 className="text-xl lg:text-3xl xl:text-[32px] font-bold text-[#051C48] mb-2">
            Procedure Template Management
          </h1>
          <p className="text-base text-[#3D3D3D]">Configure which sections appear in the PDF download for each template level</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>


      </div>
    </DashboardLayout>
  );
};

export default DashboardUpdated;
