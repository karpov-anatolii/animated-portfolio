import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="absolute left-0 top-0 w-20 h-20 flex justify-center items-center z-50">
        <div className="w-20 h-20 border-2 border-opacity-80   border-t-white rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
