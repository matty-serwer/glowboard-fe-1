# Glowboard Front End

## Overview
Glowboard is a soundboard application that allows users to create and customize their own soundboards. The front end is built using Next.js 13 with app router and TypeScript.

## Features
- 4x4 grid of buttons for sound playback
- Drag-and-drop audio file upload
- Sound title editing
- Soundboard customization (drag-and-drop sounds to move or swap)

## Data Schemas
The following data schemas are used in the application:

- User Schema
- Sound Schema
- Soundboard Schema
- Category Schema
- Effect Schema

These schemas are defined in the `schemas` directory.

## Technical Requirements
- Next.js 13 with app router
- TypeScript
- React
- React Context API
- CSS Modules
- React DnD
- React Dropzone
- Howler.js (for audio playback)

## Setup
To get started, run the following commands:

```bash
npx create-next-app@latest glowboard --ts
npm install or yarn install
npm install react-dnd or yarn add react-dnd
npm install react-dropzone or yarn add react-dropzone
npm install howler or yarn add howler