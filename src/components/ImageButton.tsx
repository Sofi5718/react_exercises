interface ImageButtonProps{
    image: string,
    onClick: () => void}

    export default function ImageButton({ image, onClick }: ImageButtonProps) {
        return (
          <button className="" onClick={onClick}>
                <img src={image}/>
          </button>
        );
      }