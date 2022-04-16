import React, { useState, useCallback, useEffect, useRef } from 'react'
import './Product.css'
import { Layout, CheckBox } from '../../components'
import category from '../../assets/fake-data/category'
import colors from '../../assets/fake-data/productsColor'
import productData from '../../assets/fake-data/products'
import size from '../../assets/fake-data/productSize'
import { Convert } from '../../components'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { useCart } from 'react-use-cart'
const Product = () => {

//đếm cart
const {
  totalUniqueItems
} = useCart();


  // tìm sản phẩm theo checkbox
  const initFilter = {
    category: [],
    color: [],
    size: []
  }

  const productList = productData.getAllProducts()

  const [product, setProduct] = useState(productList)

  const [filter, setFilter] = useState(initFilter)

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({ ...filter, category: [...filter.category, item.categorySlug] })
          break
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] })
          break
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] })
          break
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(e => e !== item.categorySlug)
          setFilter({ ...filter, category: newCategory })
          break
        case "COLOR":
          const newColor = filter.color.filter(e => e !== item.color)
          setFilter({ ...filter, color: newColor })
          break
        case "SIZE":
          const newSize = filter.size.filter(e => e !== item.size)
          setFilter({ ...filter, size: newSize })
          break
        default:
      }
    }
  }

  const clearFilter = () => setFilter(initFilter)

  const updateProducts = useCallback(
    () => {
      let temp = productList

      if (filter.category.length > 0) {
        temp = temp.filter(e => filter.category.includes(e.categorySlug))
      }

      if (filter.color.length > 0) {
        temp = temp.filter(e => {
          const check = e.colors.find(color => filter.color.includes(color))
          return check !== undefined
        })
      }

      if (filter.size.length > 0) {
        temp = temp.filter(e => {
          const check = e.size.find(size => filter.size.includes(size))
          return check !== undefined
        })
      }

      setProduct(temp)
    },
    [filter, productList],
  )

  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  const filterRef = useRef(null)

  const showHideFilter = () => filterRef.current.classList.toggle('active')


  //page for productlist
  const [products, setProducts] = useState(productData.getAllProducts());
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 6
  const pagesVisited = pageNumber * productsPerPage

  const displayProduct = product.slice(pagesVisited, pagesVisited + productsPerPage).map((item, index) => {
    return (
      <Link to={`/catalog/${item.slug}`}>

        <div className="product__list" key={index}>
          <div className="product__list__img">
            <img src={item.image02} alt="" />
            <img src={item.image01} alt="" />
          </div>
          <div className="product__list__info">
            <div className="product__list__name">
              <h2>{item.title}</h2>
            </div>
            <div className="product__list__price">
              <h3>{Convert(item.price)} VNĐ</h3>
              <span>{Convert(390000)} VNĐ</span>
            </div>
            <div className="product__list__buy">
              <button className='button'>Chọn mua</button>
              <GiShoppingCart className='icons' />{totalUniqueItems}
            </div>
          </div>

        </div>
      </Link>



    );
  });
  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  //end page for product list


  return (
    <Layout>

      <div className="container product__container">
        <div className="product__body">
          <nav className="sidebar__product__profile">
            <h2>Danh Mục Sản Phẩm</h2>
            <div className="product__list__profile">
              {category.map((item, index) => (
                <div className="check__search__product" key={index}>
                  <CheckBox
                    label={item.display}
                    onChange={(input) => filterSelect("CATEGORY", input.checked, item)} />
                </div>
              ))}

            </div>
            <h2>Màu Sắc</h2>
            <div className="product__color__list__profile">
              {colors.map((item, index) => (
                <div className="check__search__product" key={index}>
                  <CheckBox
                    label={item.display}
                    onChange={(input) => filterSelect("COLOR", input.checked, item)}

                  />
                </div>
              ))}

            </div>

            <h2>Kích Cỡ</h2>
            <div className="product__size__list__profile">
              {size.map((item, index) => (
                <div className="check__search__product" key={index}>
                  <CheckBox
                    label={item.display}
                    onChange={(input) => filterSelect("SIZE", input.checked, item)}


                  />
                </div>
              ))}

            </div>

          </nav>
          <div className=' product'>

            {displayProduct}

          </div>
        </div>
        <div className="control__page">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>

      </div>


    </Layout>
  )
}

export default Product