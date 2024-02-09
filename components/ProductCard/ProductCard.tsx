import React, { useEffect, useState } from "react";
import Image from "next/image";

import HeartStrokeBlackIcon from "../../public/svgs/heart-stroke-black.svg";
import HeartStrokeRedIcon from "../../public/svgs/heart-stroke-red.svg";
import HeartFillRedIcon from "../../public/svgs/heart-fill-red.svg";

import styles from "../../styles/products-card.module.css";

interface ProductCardProps {
    product: ProductShelfItem;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
}: ProductCardProps) => {
    const [saved, setSaved] = useState(false);
    const [hoverSaved, setHoverSaved] = useState(false);
    const [clickedEffect, setClickedEffect] = useState(false);

    const handleClickFavoriteProduct = () => {
        setClickedEffect(true);
        setSaved(!saved);
    };

    const handleHoverEnterFavoriteProduct = () => {
        setHoverSaved(true);
    };

    const handleHoverLeaveFavoriteProduct = () => {
        setHoverSaved(false);
    };

    useEffect(() => {
        if (clickedEffect) {
            setTimeout(() => {
                setClickedEffect(false);
            }, 500);
        }
    }, [clickedEffect]);

    return (
        <div className={styles.productCard}>
            <div className={styles.productCardHead}>
                <Image
                    className={styles.productCardHeadImage}
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                />

                <div className={styles.productCardHeadOverlay}>
                    <p className={styles.productCardHeadCategory}>
                        {product.category}
                    </p>
                    <button
                        className={`${styles.productCardHeadSave} ${
                            clickedEffect && styles.productCardHeadSaveClicked
                        }`}
                        onClick={handleClickFavoriteProduct}
                        onMouseEnter={handleHoverEnterFavoriteProduct}
                        onMouseLeave={handleHoverLeaveFavoriteProduct}
                    >
                        {saved ? (
                            <>
                                <HeartFillRedIcon />
                                <span
                                    className={
                                        styles.productCardHeadSaveTooltip
                                    }
                                >
                                    Yeah, produto salvo!
                                </span>
                            </>
                        ) : hoverSaved ? (
                            <HeartStrokeRedIcon />
                        ) : (
                            <HeartStrokeBlackIcon />
                        )}
                    </button>
                </div>
            </div>
            <div className={styles.productCardContent}>
                <h3 className={styles.productCardContentName}>
                    {product.name}
                </h3>
                <h5 className={styles.productCardContentNewPrice}>
                    {product.price.new
                        .toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })
                        .replace(".", ",")}
                </h5>
            </div>
        </div>
    );
};

export default ProductCard;
