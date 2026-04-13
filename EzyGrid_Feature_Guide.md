# EzyBIM Grid Generator: Comprehensive Feature Guide

Welcome to the official feature guide for **EzyGrid**, the most intuitive and powerful grid management tool for Autodesk Revit. This document details every core feature of the tool, mapped to visual demonstrations.

---

## 1. The EzyGrid Blueprint Designer

### Description
The heart of EzyGrid is its interactive, high-contrast canvas. Unlike the standard Revit environment, this designer provides a clean, "blueprint-style" interface where you can layout your entire grid system without the clutter of other model elements. 

*   **Fluid Navigation:** Zoom and pan across your grid layout with ease.
*   **Real-time Feedback:** As you draw, the system provides live coordinate readouts and distance measurements relative to existing grids.
*   **Safety Zone:** Design your grids in a sandbox environment and commit them to Revit only when you are satisfied.

---

## 2. One-Click Bulk System Generation

### Description
For projects starting from a standard modular layout, the Bulk Generator is a massive time-saver. By simply specifying the number of grids and the desired spacing for both the X and Y axes, you can generate a complete orthogonal system in milliseconds.

*   **Custom Spacing:** Define unique spacing for vertical (X-Axis) and horizontal (Y-Axis) grids.
*   **Modular Layouts:** Instantly create 10x10, 5x8, or any configuration needed for your building footprint.
*   **Instant Update:** Any change in the bulk settings reflects immediately on the designer canvas.

---

## 3. Intelligent Naming & Dynamic Orientation

### Description
Managing grid names manually is one of the most error-prone tasks in Revit. EzyGrid automates this with sophisticated naming logic that understands spatial relationships.

*   **Auto-Sequence:** Verticals are automatically numbered (1, 2, 3...) and Horizontals are lettered (A, B, C...) based on their position.
*   **Naming Swap:** Instantly switch naming styles between axes (e.g., make verticals alphabetical and horizontals numerical).
*   **Flip Logic:** Effortlessly reverse the numbering or lettering order (Flip 1-n or Flip A-n) to match your project's specific starting point.

---

## 4. Visual Control & Specification

### Description
Fine-tune the appearance of your grids before they hit the Revit model. EzyGrid gives you granular control over grid geometry and symbols.

*   **Free Length Extension:** Define exactly how far the grid lines should extend beyond the outermost intersection bubbles.
*   **Bubble Visibility:** Toggle bubbles at the Start, End, or Both sides of your grids globally. No more clicking individual grid ends in Revit to show/hide bubbles.
*   **Consistency:** Ensures every grid in your project follows the exact same graphical standard.

---

## 5. Geospatial Precision & Real-Time Documentation

### Description
Maintain absolute coordination between your grid system and Revit's geospatial coordinates. EzyGrid uniquely visualizes critical project points directly on the designer canvas, allowing for a level of precision that manual placement cannot match.

*   **Integrated Origin Markers:** See the **Internal Origin**, **Project Base Point (PBP)**, and **Survey Point (SP)** live on your canvas to ensure your grid is anchored to the correct real-world location.
*   **Automated Sub-Dimensions:** The designer automatically calculates and displays dimensions between all placed grids, providing instant validation of your building's structural intervals.
*   **High-Contrast Blueprint:** The interactive grid background and dashed line styling mimic professional drafting standards, making it easy to spot misalignments at a glance.

---

## 6. Automatic Documentation & Origin Alignment

### Description
EzyGrid bridges the gap between layout and final documentation by automating the setup and alignment of your grid system.

*   **Origin Alignment:** Instantly align the intersection of Grid 1 and Grid A to the **Internal Origin** or the **Project Base Point** with a single click.
*   **Automated Dimensions:** Generate linear dimension strings (including both segment and overall dimensions) automatically during grid creation.
*   **Revit Integration:** When you click "Generate," the tool executes a clean transaction in Revit, placing actual Grid elements and Dimensions exactly as designed.

---

## Technical Specifications
*   **Revit Compatibility:** Supports Revit 2019 through 2026.
*   **Frameworks:** Built on .NET 4.8 and .NET 8.0 for maximum performance.
*   **User Interface:** Powered by high-performance WPF rendering for a smooth, lag-free experience.

---
> [!TIP]
> Use the **Magnetic Snap** feature (X/Y axis snapping) on the canvas to ensure your manually placed grids are perfectly aligned with existing reference points.
