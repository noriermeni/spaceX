import React from "react";
import Image from "next/image";

import Circle from '../../assets/images/circle.gif';

export default function Spinner() {
    return <div>
        <Image src={Circle} />
    </div>
}