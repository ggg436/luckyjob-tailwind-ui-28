
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { Link } from 'react-router-dom';

const FooterText = ({ text, position, url }: { text: string; position: [number, number, number]; url: string }) => {
  const textRef = useRef<any>();

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        ref={textRef}
        position={position}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        onClick={() => window.location.href = url}
        onPointerOver={(e) => {
          document.body.style.cursor = 'pointer';
          if (textRef.current) {
            textRef.current.position.z = 0.5;
          }
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = 'auto';
          if (textRef.current) {
            textRef.current.position.z = 0;
          }
        }}
      >
        {text}
      </Text>
    </Float>
  );
};

export const Footer3D = () => {
  const footerItems = [
    { text: 'Shop Now', url: '/find-job', position: [-2, 0, 0] },
    { text: 'About Us', url: '/about', position: [0, 0, 0] },
    { text: 'Contact', url: '/contact', position: [2, 0, 0] },
  ];

  return (
    <div className="h-[300px] w-full bg-[#3A5A40]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {footerItems.map((item, index) => (
          <FooterText 
            key={index} 
            text={item.text} 
            position={item.position as [number, number, number]} 
            url={item.url} 
          />
        ))}
      </Canvas>
    </div>
  );
};
