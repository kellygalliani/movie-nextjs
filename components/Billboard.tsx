import useBillboard from "@/hooks/useBilboard";
import React, { useCallback } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";

const BillBoard = () => {
  const { data, isLoading } = useBillboard();
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative h-[56.25vm]">
      <video
        className="
        w-full
        h-[56.25vw]
        min-h-[189px]
        object-cover
        brightnes-[60%]
        "
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p
          className="
        text-white 
        text-xl 
        md:text-5xl 
        h-full 
        w-[80%] 
        lg:w-[50%]
        lg:text-6xl 
        font-bold 
        drop-shadow-xl"
        >
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={data?.id} />
          <button
            className="bg-white/30 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
            onClick={handleOpenModal}
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
