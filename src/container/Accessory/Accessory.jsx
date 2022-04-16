import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Layout, CheckBox, Convert } from '../../components'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { useCart } from 'react-use-cart'
import accessoryData from '../../assets/fake-data/accessory'
import colors from '../../assets/fake-data/accessoryColor'
import categoryAcc from '../../assets/fake-data/accessorybySlug'

import './Accessory.css'
const Accessory = () => {

  const {
    totalUniqueItems
  } = useCart();
// tìm sản phẩm theo checkbox
const initFilter = {
    category: [],
    color: []
    
  }

  const accessoriesList = accessoryData.getAllAccessory()

  const [accessory, setAccessory] = useState(accessoriesList)

  const [filter, setFilter] = useState(initFilter)

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({ ...filter, category: [...filter.category, item.accessorySlug] })
          break
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] })
          break
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(e => e !== item.accessorySlug)
          setFilter({ ...filter, category: newCategory })
          break
        case "COLOR":
          const newColor = filter.color.filter(e => e !== item.color)
          setFilter({ ...filter, color: newColor })
          break

        default:
      }
    }
  }

  const clearFilter = () => setFilter(initFilter)

  const updateAccessories = useCallback(
    () => {
      let temp = accessoriesList

      if (filter.category.length > 0) {
        temp = temp.filter(e => filter.category.includes(e.accessorySlug))
      }

      if (filter.color.length > 0) {
        temp = temp.filter(e => {
          const check = e.colors.find(color => filter.color.includes(color))
          return check !== undefined
        })
      }

      

      setAccessories(temp)
    },
    [filter, accessoriesList],
  )

  useEffect(() => {
    updateAccessories()
  }, [updateAccessories])

  const filterRef = useRef(null)

  const showHideFilter = () => filterRef.current.classList.toggle('active')







    //page for productlist
    const [accessories, setAccessories] = useState(accessoryData.getAllAccessory());
    const [pageNumber, setPageNumber] = useState(0);

    const accessoriesPerPage = 6
    const pagesVisited = pageNumber * accessoriesPerPage

    const displayAccessories = accessories.slice(pagesVisited, pagesVisited + accessoriesPerPage).map((item, index) => {
        return (
            <Link to={`/accessories/${item.slug}`}>

                <div className="accessoris__list" key={index}>
                    <div className="accessories__list__img">
                        <img src={item.image02} alt="accessory-image" />
                    </div>

                    <div className="accessoris__list__info">
                        <div className="accessories__list__name">
                            <h2>{item.title}</h2>
                        </div>
                        <div className="accessories__list__price">
                            <h3>{Convert(item.price)} VNĐ</h3>
                            <span className='danger'>Sale 20%</span>
                        </div>
                        <div className="accessories__list__buy">
                            <button className='button'>Chọn mua</button>
                            <GiShoppingCart className='icons' />{totalUniqueItems}
                        </div>
                    </div>

                </div>
            </Link>



        );
    });
    const pageCount = Math.ceil(accessories.length / accessoriesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    //end page for product list







    return (
        <Layout>
            <div className="container accessories__container">
                <div className="accessories__body">
                    <nav className="sidebar__accessories__profile">
                        <h2>Danh Mục Sản Phẩm</h2>
                        <div className="accessories__list__profile">
                            {categoryAcc.map((item, index) => (
                                <div className="check__search__product" key={index}>
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect("CATEGORY", input.checked, item)} />
                                </div>
                            ))}

                        </div>
                        <h2>Màu Sắc</h2>
                        <div className="accessories__color__list__profile">
                            {colors.map((item, index) => (
                                <div className="check__search__product" key={index}>
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect("COLOR", input.checked, item)}

                                    />
                                </div>
                            ))}

                        </div>


                    </nav>


                    <div className="display__accessories">
                        {displayAccessories}
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

export default Accessory