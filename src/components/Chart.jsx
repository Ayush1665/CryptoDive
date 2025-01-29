import React, { useEffect, useRef } from "react";

const Chart = ({ color = "#00FFA0" }) => { 
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let data = Array.from({ length: 18 }, () => Math.random() * 60); 

    const drawChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(0, data[0]);
      data.forEach((value, index) => {
        ctx.lineTo((index * canvas.width) / (data.length - 1), value);
      });
      ctx.strokeStyle = color; 
      ctx.lineWidth = 1.7;
      ctx.stroke();

      setTimeout(() => {
        data.shift(); 
        data.push(Math.random() * 40); 
        requestAnimationFrame(drawChart); 
      }, 3000); 
    };

    drawChart();
  }, [color]); 

  return (
    <canvas
      ref={canvasRef}
      width={80} 
      height={50} 
      className="w-10 h-5"
    />
  );
};

export default Chart;
