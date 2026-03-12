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
} from "lucide-react";
import AdminDashboardLayout from "../../components/AdminDashboardLayout";
import ChartImg from "../../assets/BarLineChart.png";

/* ── Stat card ── */
const StatCard = ({
  icon: Icon,
  label,
  value,
  color = "text-white",
  bgColor,
}) => (
  <div className="bg-white rounded-sm border border-[#D5DAE2] p-4 flex items-center gap-4 shadow-dashCard transition-shadow">
    <div
      className={`w-16 h-16 flex items-center justify-center flex-shrink-0 ${color} ${bgColor}`}
    >
      <Icon />
    </div>
    <div className="flex flex-col justify-between h-full">
      <p className="text-2xl font-bold text-[#051C48]">{value}</p>
      <p className="text-base text-[#3D3D3D]">{label}</p>
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
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18.0001 10.0003H13.0001"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M10.0001 3.00012H16.5001C16.9641 3.00012 17.1971 3.00012 17.3921 3.02612C18.0466 3.11244 18.6543 3.41224 19.1212 3.87905C19.588 4.34586 19.8878 4.95362 19.9741 5.60812C20.0001 5.80312 20.0001 6.03612 20.0001 6.50012"
      stroke="currentColor"
      stroke-width="1.5"
    />
    <path
      d="M2.00003 6.95012C2.00003 6.06712 2.00003 5.62612 2.07003 5.25812C2.21925 4.46796 2.60317 3.74112 3.17168 3.17243C3.7402 2.60373 4.46692 2.21959 5.25703 2.07012C5.62603 2.00012 6.06803 2.00012 6.95003 2.00012C7.33603 2.00012 7.53003 2.00012 7.71603 2.01712C8.51708 2.09235 9.27682 2.4074 9.89603 2.92112C10.04 3.04012 10.176 3.17612 10.45 3.45012L11 4.00012C11.816 4.81612 12.224 5.22412 12.712 5.49512C12.9802 5.64462 13.2648 5.76273 13.56 5.84712C14.098 6.00012 14.675 6.00012 15.828 6.00012H16.202C18.834 6.00012 20.151 6.00012 21.006 6.77012C21.0854 6.84012 21.16 6.91479 21.23 6.99412C22 7.84912 22 9.16612 22 11.7981V14.0001C22 17.7711 22 19.6571 20.828 20.8281C19.656 21.9991 17.771 22.0001 14 22.0001H10C6.22903 22.0001 4.34303 22.0001 3.17203 20.8281C2.00103 19.6561 2.00003 17.7711 2.00003 14.0001V6.95012Z"
      stroke="currentColor"
      stroke-width="1.5"
    />
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
const AdminDashboard = () => {
  const stats = [
    {
      icon: MyProjectsIcon,
      label: "Total Projects",
      value: 4,
      color: "text-[#794AFC]",
      bgColor: "bg-[#F2EDFE]",
    },
    {
      icon: GeneratedProceduresIcon,
      label: "Generated Procedures",
      value: 8,
      color: "text-[#2E62F1]",
      bgColor: "bg-[#F1F5FE]",
    },
    {
      icon: PendingIcon,
      label: "Pending Approvals",
      value: 0,
      color: "text-[#B56A00]",
      bgColor: "bg-[#FEF6E7]",
    },
    {
      icon: ImpactAnalysisIcon,
      label: "Impact Reports",
      value: 1,
      color: "text-[#23A055]",
      bgColor: "bg-[#E5F9EE]",
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
    <AdminDashboardLayout>
      <div className="space-y-6 lg:space-y-10 ">
        {/* Page title */}
        <div>
          <h1 className="text-xl lg:text-3xl xl:text-[32px] font-bold text-[#051C48]">
            Welcome to the Process Library &amp; Engineering System
          </h1>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Procedure Customization Progress */}
        <div className="bg-white  rounded-sm border border-slate-200 p-5 shadow-dashCard">
          <h2 className={headingStyle}>Procedure Customization Progress</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {progressBars.map((b) => (
              <CircularProgress key={b.label} {...b} />
            ))}
          </div>
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Generated Procedures chart placeholder */}
          <div className="bg-white  rounded-sm border border-slate-200 p-5 shadow-dashCard">
            <h2 className={headingStyle}>Generated Procedures by Project</h2>
            {/* Simple CSS bar chart */}
            <div className="flex  ">
              <img
                src={ChartImg}
                alt=""
                className="w-full h-full max-h-[424px] object-cover"
              />
            </div>
          </div>

          {/* Approval workflow summary */}
          <div className="bg-white  rounded-sm border border-slate-200 p-5 shadow-dashCard">
            <h2 className={headingStyle}>Approval Workflow Summary</h2>
            <div className="space-y-4 mt-2">
              {approvals.map((a) => (
                <ApprovalRow key={a.label} {...a} />
              ))}
            </div>
          </div>
        </div>

        {/* Procedures Under Customization */}
        <div className="bg-white  rounded-sm border border-slate-200 p-5 shadow-dashCard">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`${headingStyle} !mb-0`}>
              Procedures Under Customization (0)
            </h2>
            <button className="text-base text-[#303642] hover:text-black font-medium">
              View All
            </button>
          </div>
          <div className="flex flex-col items-center justify-center py-10 gap-3 text-slate-400">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
              <FileEdit size={20} className="text-slate-400" />
            </div>
            <p className="text-sm">No projects yet</p>
            <button className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              Start a New Project
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
  {procedures.map((p, i) => (
    <ProcedureCard key={i} {...p} />
  ))}
</div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Stakeholder Input */}
          <div className="bg-white  rounded-sm border border-slate-200 p-5 shadow-dashCard">
            <div className="flex items-center justify-between mb-6">
              <h2 className={`${headingStyle} !mb-0`}>
                Stakeholder Input Completion Rate
              </h2>
              <span className="text-base font-semibold text-slate-500">
                <span className="text-[#051C48] mb-6 font-bold text-xl lg:text-2xl">
                  0%
                </span>{" "}
                Total
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-10 gap-5 md:min-h-[510px] bg-[#F7F8F9]">
              <div className="w-20 h-20 rounded-sm bg-white flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.41699 10.0007C5.41699 7.43065 7.46699 5.44065 10.0137 4.16732C12.6337 2.86065 16.167 2.08398 20.0003 2.08398C23.8337 2.08398 27.367 2.85898 29.987 4.16732C32.5337 5.44065 34.5837 7.43065 34.5837 10.0007V30.0007C34.5837 32.5707 32.5337 34.559 29.987 35.834C27.367 37.1423 23.8337 37.9173 20.0003 37.9173C16.167 37.9173 12.6337 37.1423 10.0137 35.834C7.46699 34.5573 5.41699 32.569 5.41699 30.0007V10.0007ZM7.91699 10.0007C7.91699 8.88898 8.85033 7.54398 11.132 6.40398C13.337 5.30232 16.4703 4.58398 20.0003 4.58398C23.5303 4.58398 26.6637 5.30065 28.8687 6.40398C31.1503 7.54398 32.0837 8.88732 32.0837 10.0007C32.0837 11.114 31.1503 12.4573 28.8687 13.5973C26.6637 14.699 23.5303 15.4173 20.0003 15.4173C16.4703 15.4173 13.337 14.7007 11.132 13.5973C8.85033 12.4573 7.91699 11.114 7.91699 10.0007ZM7.91699 30.0007C7.91699 31.1123 8.85033 32.4573 11.132 33.5973C13.337 34.699 16.4703 35.4173 20.0003 35.4173C23.5303 35.4173 26.6637 34.7007 28.8687 33.5973C31.1487 32.4573 32.0837 31.114 32.0837 30.0007V24.5123C31.4553 25.0123 30.7437 25.454 29.987 25.8323C27.367 27.1423 23.8337 27.9173 20.0003 27.9173C16.167 27.9173 12.6337 27.1423 10.0137 25.834C9.26982 25.4691 8.56697 25.0261 7.91699 24.5123V30.0007ZM32.0837 14.5123V20.0007C32.0837 21.1123 31.1503 22.4573 28.8687 23.5973C26.6637 24.699 23.5303 25.4173 20.0003 25.4173C16.4703 25.4173 13.337 24.7007 11.132 23.5973C8.85033 22.4573 7.91699 21.114 7.91699 20.0007V14.5123C8.54533 15.0123 9.25699 15.454 10.0137 15.8323C12.6337 17.1423 16.167 17.9173 20.0003 17.9173C23.8337 17.9173 27.367 17.1423 29.987 15.834C30.7308 15.4691 31.4337 15.0261 32.0837 14.5123Z"
                    fill="#8140B0"
                  />
                </svg>
              </div>
              <p className="text-[#303642] md:text-lg">
                No stakeholder data yet
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <div className="bg-white h-full rounded-sm border border-slate-200 p-5 shadow-dashCard">
            {/* Impact Analysis Stats */}
              <div className="bg-[#F7F8F9] p-4 mb-6">
                <h2 className="text-[#051C48] mb-6 font-bold text-lg">Impact Analysis Stats</h2>
                <div className="flex items-center flex-wrap justify-evenly gap-6">
                  {[
                    {
                      icon: ReportIcon,
                      label: "Reports",
                      value: 5,
                      color: "text-blue-500",
                    },
                    {
                      icon: CheckedIcon,
                      label: "Accepted",
                      value: 5,
                      color: "text-emerald-500",
                    },
                    {
                      icon: PendingIcon,
                      label: "Pending",
                      value: 0,
                      color: "text-amber-500",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center gap-1 p-4 flex-1"
                    >
                      <s.icon size={20} className={`${s.color} w-6 h-6`} />
                      <span className="text-xl font-bold text-[#051C48] mt-2">
                        {s.value}
                      </span>
                      <span className="text-base text-slate-800">{s.label}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Recently Created Guides */}
              <div className="">
                <div className="flex items-center flex-wrap justify-between mb-6">
                  <h2 className={`${headingStyle} !mb-0`}>
                    Recently Created Guides
                  </h2>
                  <button className="text-base text-[#303642] hover:text-black font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {guides.map((g, i) => (
                    <GuideItem key={i} {...g} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white  rounded-sm border border-slate-200 p-5 shadow-dashCard">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`${headingStyle} !mb-0`}>
              Recent Activity
            </h2>
            <button className="text-base text-[#303642] hover:text-black font-medium">
              View All
            </button>
          </div>
          <div className="space-y-5">
            {activities.map((a, i) => (
              <ActivityRow key={i} {...a} />
            ))}
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminDashboard;
