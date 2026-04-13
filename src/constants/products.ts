import { Tag, Database, Activity, LayoutGrid } from "lucide-react";
import autoTaggerImg from "../assets/auto-tagger.png";
import dataSyncImg from "../assets/data-sync.png";
import clashResolverImg from "../assets/clash-resolver.png";
import gridGenIcon from "../assets/grid-generator-icon.png";
import rebarGenIcon from "../assets/rebar-generator-icon.png";

// Guide Showcase Images
import blueprintDesigner from "../assets/product-details/grid-generator/blueprint-designer.png";
import bulkAutomation from "../assets/product-details/grid-generator/bulk-automation.png";
import namingOrientation from "../assets/product-details/grid-generator/naming-orientation.png";
import visualControls from "../assets/product-details/grid-generator/visual-controls.png";
import alignmentDocs from "../assets/product-details/grid-generator/alignment-docs.png";

export interface FeatureDetail {
  title: string;
  description: string;
}

export interface ShowcaseItem {
  title: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: any;
  image: string;
  price: string;
  isFree: boolean;
  features: string[];
  fullFeatures: FeatureDetail[];
  showcase?: ShowcaseItem[];
  specs?: string[];
  tip?: string;
}

export const products: Product[] = [
  {
    id: "grid-generator",
    name: "EzyGrid",
    tagline: "Welcome to the official feature guide for EzyGrid, the most intuitive and powerful grid management tool for Autodesk Revit.",
    description: "Rapidly generate complex Revit grid systems with an interactive blueprint canvas and origin targeting.",
    longDescription: "The heart of EzyGrid is its interactive, high-contrast canvas. Unlike the standard Revit environment, this designer provides a clean, 'blueprint-style' interface where you can layout your entire grid system without the clutter of other model elements.",
    icon: LayoutGrid,
    image: gridGenIcon,
    price: "FREE",
    isFree: true,
    features: ["Interactive Canvas", "Bulk Generation", "Origin Alignment", "Smart Dimensions"],
    fullFeatures: [
      {
        title: "Blueprint Drawing Canvas",
        description: "Draft your entire grid system in a zero-lag, blueprint-style workspace that syncs instantly with Revit."
      },
      {
        title: "Intelligent Bulk Generation",
        description: "Input counts and spacing for both X and Y axes to generate complete systems in a single click."
      },
      {
        title: "Origin & Base Point Snap",
        description: "Automatically align your grid intersection A-1 to the Project Base Point or Internal Origin."
      },
      {
        title: "Granular Visibility Controls",
        description: "Toggle bubble start/end points independently for horizontal and vertical grids."
      }
    ],
    showcase: [
      {
        title: "The EzyGrid Blueprint Designer",
        description: "The heart of EzyGrid is its interactive, high-contrast canvas. Fluid navigation allows you to zoom and pan across your grid layout with ease, receiving real-time coordinate readouts and distance measurements.",
        image: blueprintDesigner
      },
      {
        title: "One-Click Bulk System Generation",
        description: "For projects starting from a standard modular layout, the Bulk Generator is a massive time-saver. Simply specify the number of grids and desired spacing for both axes to generate a complete system in milliseconds.",
        image: bulkAutomation
      },
      {
        title: "Intelligent Naming & Dynamic Orientation",
        description: "Automate grid names with sophisticated logic that understands spatial relationships. Auto-sequence numbers and letters based on position, or instantly swap naming styles between axes.",
        image: namingOrientation
      },
      {
        title: "Visual Control & Specification",
        description: "Fine-tune the appearance of your grids. Define free-length extensions and toggle bubble visibility at the start or end points globally to ensure every grid follows your graphical standard.",
        image: visualControls
      },
      {
        title: "Automatic Documentation & Origin Alignment",
        description: "Bridge the gap between layout and final documentation. Instantly align intersections to the Internal Origin or Project Base Point and generate linear dimension strings automatically.",
        image: alignmentDocs
      }
    ],
    specs: [
      "Revit Compatibility: Supports Revit 2019 through 2026.",
      "Frameworks: Built on .NET 4.8 and .NET 8.0 for maximum performance.",
      "User Interface: Powered by high-performance WPF rendering for a smooth, lag-free experience."
    ],
    tip: "Use the Magnetic Snap feature (X/Y axis snapping) on the canvas to ensure your manually placed grids are perfectly aligned with existing reference points."
  },
  {
    id: "rebar-generator",
    name: "EzyRebar",
    tagline: "EzyBIM Rebar Generator",
    description: "Multi-element rebar modeling for Beams, Columns, and Footings with intelligent confinement and continuity logic.",
    longDescription: "The EzyBIM Rebar Generator is a comprehensive structural engineering tool that automates the placement of reinforcement according to international design standards. It features dedicated modules for various structural elements, providing granular control over main bars, stirrups, and starter bars. With built-in intelligence for Lap Splices, Cranking, and Confinement zones, it transforms hours of manual modeling into minutes of surgical accuracy.",
    icon: LayoutGrid,
    image: rebarGenIcon,
    price: "Coming Soon",
    isFree: false,
    features: ["Full Element Suite", "Intelligent Confinement", "Splice & Lap Logic", "Automated Sectioning"],
    fullFeatures: [
      {
        title: "Multi-Module Support",
        description: "Dedicated workflows for Beams (continuous/single), Columns (confinement logic), and Footings (top/bottom mats)."
      },
      {
        title: "Advanced Splice Logic",
        description: "Automated Lap Splice calculation with Crank (offset bend) support for vertical reinforcement."
      },
      {
        title: "Confinement Awareness",
        description: "Intelligent stirrup spacing that distinguishes between end-zones (high shear) and mid-span regions."
      },
      {
        title: "Automated View Creation",
        description: "Generate structural sections at critical locations with automatic dimensioning and annotation."
      }
    ]
  }
];
