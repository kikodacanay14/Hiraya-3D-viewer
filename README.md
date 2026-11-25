# Hiraya interactive 3D viewer

A static GitHub Pages viewer for the original `Hiraya.glb`, built with Google's
[`<model-viewer>`](https://modelviewer.dev/).

## Controls

- Rotate: drag with mouse or one finger
- Zoom: mouse wheel or pinch
- Pan: right-drag, Shift-drag, or two-finger drag
- Reset View: restores the original camera position and target
- Fullscreen: opens the viewer across the full display

The Pages deployment downloads `Hiraya.glb` from the repository's `v1.1`
GitHub Release and serves it with the viewer. It is a web-specific export from
the original Blender scene. The
unsupported ballroom-wide `Haze` volume is excluded so it does not render as a
solid box, while the scene's compatible point and spot lights are included via
`KHR_lights_punctual`. Four key stage beams are represented with translucent,
emissive web geometry because GLB does not support Blender's volumetric shafts.
The original `.blend` and source `.glb` remain untouched.

GitHub Pages publishes the viewer through the repository's deployment workflow.

## Rules for agents

Claude and Codex chats follow `CLAUDE.md` here, including Kiko's "BSE development instructions" (25 Nov 2026): the
Delivery Board (https://claude.ai/artifact/VDVXsxnpX36S91w8PXEauP) is the tracker and its Decisions tab holds approved
rules; approvals and questions for Kiko go through Concord; files go in the BSE Apps & Systems shared Drive.
