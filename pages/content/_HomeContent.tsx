import React, { useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Header from "../../components/Header/Header";
import MenuDrawer from "../../components/MenuDrawer/MenuDrawer";
import LinearEffectWords from "../../components/LinearEffectWords/LinearEffectWords";
import HighlightsProducts from "../../components/HighlightsProducts/HighlightsProducts";
import ProductShelf from "../../components/ProductShelf/ProductShelf";
import CategoryList from "../../components/CategoryList/CategoryList";
import Footer from "../../components/Footer/Footer";

import { MenuDrawerContext } from "../../context/MenuDrawerContext";

import styles from "../../styles/home.module.css";

const HomeContent: NextPage = () => {
    const { opened } = useContext(MenuDrawerContext);

    const mostAccessed: HighlightsProductsItem = {
        id: "6",
        image: "/images/products/000004/003.jpg",
        name: "Nike Air VaporMax Plus",
        link: "/nike-air-vapormax-plus",
    };

    const mostPurchased: HighlightsProductsItem = {
        id: "7",
        image: "/images/products/000005/003.jpg",
        name: "Nike ACG Air Nasu GORE-TEX",
        link: "/nike-acg-air-nasu-gore-tex",
    };

    const productsList: ProductShelfItem[] = [
        {
            id: "1",
            image: "/images/products/000001/001.jpg",
            name: "Air Jordan 1 Mid",
            category: "Lifestyle",
            link: "/air-jordan-1-mid",
            price: {
                new: 115.0,
            },
        },
        {
            id: "2",
            image: "/images/products/000002/001.jpg",
            name: "Jordan Zoom Trunner Advance",
            category: "Running",
            link: "/jordan-zoom-trunner-advance",
            price: {
                new: 110.0,
            },
        },
        {
            id: "3",
            image: "/images/products/000003/001.jpg",
            name: "Nike SB Shane",
            category: "Skateboarding",
            link: "/nike-sb-shane",
            price: {
                new: 80.0,
            },
        },
        {
            id: "4",
            image: "/images/products/000002/001.jpg",
            name: "Jordan Zoom Trunner Advance",
            category: "Running",
            link: "/jordan-zoom-trunner-advance",
            price: {
                new: 110.0,
            },
        },
        {
            id: "5",
            image: "/images/products/000001/001.jpg",
            name: "Air Jordan 1 Mid",
            category: "Lifestyle",
            link: "/air-jordan-1-mid",
            price: {
                new: 115.0,
            },
        },
    ];

    const categoryList: categoryListItem[] = [
        {
            id: "1",
            image: "/images/category/000001/001.png",
            name: "Boots",
            link: "#",
        },
        {
            id: "2",
            image: "/images/category/000002/001.png",
            name: "Lifestyle",
            link: "#",
        },
        {
            id: "3",
            image: "/images/category/000003/001.png",
            name: "Running",
            link: "#",
        },
        {
            id: "4",
            image: "/images/category/000004/001.png",
            name: "Skateboarding",
            link: "#",
        },
    ];

    return (
        <>
            <Head>
                <meta
                    name="google-site-verification"
                    content="CAOPbT26QS8bpYUvJaW5kxI9kh6nC_hA34kER-d4D_A"
                />
            </Head>

            <MenuDrawer />

            <div
                className={`${styles.page} ${
                    opened && styles.menuDrawerOpened
                }`}
            >
                <Header />

                <LinearEffectWords />

                <HighlightsProducts
                    mostAccessed={mostAccessed}
                    mostPurchased={mostPurchased}
                />

                <ProductShelf
                    products={productsList}
                    title="Mais a ser explorado"
                />
                <ProductShelf products={productsList} />

                <CategoryList categories={categoryList} />

                <Footer />
            </div>
        </>
    );
};

export default HomeContent;
