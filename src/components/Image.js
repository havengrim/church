import React from 'react'; 
import { Image } from 'primereact/image';

const Images = ({ src }) => {
    const icon = (<i className="pi pi-search"></i>);

    return (
        <div className="card flex justify-content-center">
            <style>
                {`
                    .p-image-toolbar {
                        color: white !important;
                    }
                `}
            </style>
            <Image src={src} indicatorIcon={icon} alt="Image" preview />
        </div>
    );
}

export default Images;
