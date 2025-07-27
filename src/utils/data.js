import {
  LayoutDashboard,
  LineChart,
  Users,
  Layers,
  Folder,
  AppWindow,
  Landmark,
  Component,
  PackageIcon,
  AppWindowMac,
  TableOfContents,
  User,
  Book,
  DollarSign,
  CheckCircle2,
  Facebook,
  Twitter,
  Music,
  Goal,
  Music2,
  Music2Icon,
} from "lucide-react";

export const acquisitionCostData = [
  { day: "March 1", acquisition: 120, cost: 200 },
  { day: "March 2", acquisition: 300, cost: 250 },
  { day: "March 3", acquisition: 240, cost: 220 },
  { day: "March 4", acquisition: 350, cost: 400 },
  { day: "March 5", acquisition: 320, cost: 260 },
  { day: "March 6", acquisition: 280, cost: 500 },
  { day: "March 7", acquisition: 260, cost: 420 },
];

export const trafficSourceData = [
  { day: "March 1", value: 80 },
  { day: "March 2", value: 120 },
  { day: "March 3", value: 140 },
  { day: "March 4", value: 180 },
  { day: "March 5", value: 130 },
  { day: "March 6", value: 110 },
  { day: "March 7", value: 120 },
];

export const budgetByPlatform = [
  { platform: Facebook, remaining: 12345, pct: 60, color: "bg-lime-200" },
  { platform: Twitter, remaining: 1543, pct: 86, color: "bg-lime-300" },
  { platform: Music2, remaining: 5678, pct: 67, color: "bg-lime-400" },
  { platform: Facebook, remaining: 3456, pct: 21, color: "bg-red-600" },
  { platform: Music2Icon, remaining: 2098, pct: 35, color: "bg-amber-300" },
];

export const mainNavItems = [
  { label: "Marketing", icon: LayoutDashboard, active: true },
  { label: "Analytics", icon: LineChart },
  { label: "Business", icon: Folder },
  { label: "Project", icon: Layers },
  { label: "HRM", icon: Users },
  { label: "Mobile App", icon: AppWindow },

  {
    label: "Landing page",

    icon: Landmark,
  },
  {
    label: "Components",
    children: [
      { label: "Buttons" },
      { label: "Cards" },
      { label: "Tables" },
      { label: "Forms" },
    ],
    icon: Component,
  },
  {
    label: "Pages",
    children: [
      { label: "About" },
      { label: "Contact" },
      { label: "Blog" },
      { label: "Pricing" },
    ],
    icon: PackageIcon,
  },
  {
    label: "Apps",
    children: [{ label: "Chat" }],
    icon: AppWindowMac,
  },
  {
    label: "Content",
    children: [{ label: "Posts" }, { label: "Categories" }, { label: "Tags" }],
    icon: TableOfContents,
  },
  {
    label: "Users",
    children: [{ label: "List" }, { label: "Roles" }, { label: "Permissions" }],
    icon: User,
  },
  {
    label: "Documentation",
    children: [{ label: "Getting Started" }, { label: "Components" }],
    icon: Book,
  },
];

export const timeRanges = [
  { value: "7d", label: "7 Days" },
  { value: "14d", label: "14 Days" },
  { value: "1m", label: "1 Month" },
];

export const metricsData = [
  {
    title: "Total Spend",
    value: "$8,765",
    previous: "$10,234",
    progressLabel: "-14.32%",
    progressColor: "red",
    icon: DollarSign,
  },
  {
    title: "Visitor",
    value: "14,321",
    previous: "12,543",
    progressLabel: "+14.23%",
    progressColor: "green",
    icon: Users,
  },
  {
    title: "Acquisition",
    value: "1,023",
    previous: "876",
    progressLabel: "+16.73%",
    progressColor: "green",
    icon: CheckCircle2,
  },
  {
    title: "Revenue",
    value: "$18,765",
    previous: "$15,432",
    progressLabel: "+21.67%",
    progressColor: "green",
    icon: DollarSign,
  },
];
