
// This file helps TypeScript recognize @react-three/fiber and @react-three/drei components
import * as THREE from 'three';
import React from 'react';

declare module '@react-three/fiber' {
  export function Canvas(props: {
    children: React.ReactNode;
    camera?: {
      position?: [number, number, number];
      fov?: number;
    };
    [key: string]: any;
  }): JSX.Element;

  export function useFrame(callback: (state: {
    clock: { getElapsedTime: () => number };
  }) => void): void;
}

declare module '@react-three/drei' {
  export function OrbitControls(props: {
    enableZoom?: boolean;
    enablePan?: boolean;
    enableRotate?: boolean;
    [key: string]: any;
  }): JSX.Element;
  
  export function Float(props: {
    speed?: number;
    rotationIntensity?: number;
    floatIntensity?: number;
    children: React.ReactNode;
    [key: string]: any;
  }): JSX.Element;
  
  export function MeshDistortMaterial(props: {
    color?: string;
    distort?: number;
    speed?: number;
    opacity?: number;
    transparent?: boolean;
    [key: string]: any;
  }): JSX.Element;
}
