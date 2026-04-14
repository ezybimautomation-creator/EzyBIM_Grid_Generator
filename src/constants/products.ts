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
import geospatialPrecision from "../assets/product-details/grid-generator/geospatial-precision.png";
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
  heroImage?: string;
  price: string;
  isFree: boolean;
  downloadUrl?: string;
  features: string[];
  fullFeatures: FeatureDetail[];
  showcase?: ShowcaseItem[];
  specs?: string[];
  tip?: string;
  videoUrl?: string;
}

export const products: Product[] = [
  {
    id: "grid-generator",
    name: "EzyGrid",
    tagline: "EzyBIM Grid Generator",
    description: "Rapidly generate complex Revit grid systems with an interactive blueprint canvas and origin targeting.",
    longDescription: "The heart of EzyGrid is its interactive, high-contrast canvas. Unlike the standard Revit environment, this designer provides a clean, 'blueprint-style' interface where you can layout your entire grid system without the clutter of other model elements. Design your grids in a sandbox environment and commit them to Revit only when you are satisfied.",
    icon: LayoutGrid,
    heroImage: blueprintDesigner,
    image: gridGenIcon,
    price: "FREE",
    isFree: true,
    downloadUrl: "#", // Replace with your GitHub Release link
    videoUrl: "Dz3v-cmQhx8",
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
        title: "One-Click Bulk System Generation",
        description: "For projects starting from a standard modular layout, the Bulk Generator is a massive time-saver. By simply specifying the number of grids and the desired spacing for both the X and Y axes, you can generate a complete orthogonal system in milliseconds.",
        image: bulkAutomation
      },
      {
        title: "Intelligent Naming & Dynamic Orientation",
        description: "Managing grid names manually is one of the most error-prone tasks in Revit. EzyGrid automates this with sophisticated naming logic that understands spatial relationships and auto-sequences based on position.",
        image: namingOrientation
      },
      {
        title: "Visual Control & Specification",
        description: "Fine-tune the appearance of your grids before they hit the Revit model. EzyGrid gives you granular control over grid geometry, free length extensions, and global bubble visibility symbols.",
        image: visualControls
      },
      {
        title: "Geospatial Precision & Real-Time Documentation",
        description: "Maintain absolute coordination between your grid system and Revit's geospatial coordinates. Visualize critical points like Internal Origin, PBP, and Survey Point live on the canvas. Features AutoCAD-like dynamic input: hover over a position, type the dimension, and hit Enter to instantly create a grid. The canvas also intelligently auto-centers and zooms to ensure every grid remains perfectly visible at all times.",
        image: geospatialPrecision
      },
      {
        title: "Automatic Dimensions & Origin Alignment",
        description: "Bridge the gap between layout and final documentation. The tool automatically aligns the A-1 grid intersection point to the selected reference point (Project Base Point or Internal Origin) and generates linear dimension strings during creation.",
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
