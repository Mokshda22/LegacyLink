import React, { useState } from "react";
import Filter from "../components/Filter";
import Product from "../components/Product";

function Products({ products, filters }) {
  const [filterProducts, setFilterProducts] = useState(products);

  const [activeFilters, setActiveFilters] = useState([
    { type: "job roles", options: [] },
    { type: "graduation year", options: [] },
    { type: "department", options: [] },
  ]);

  const onUpdateFilter = () => {
    let updatedFilterProducts = products
      .filter((fp) => {
        let options = activeFilters.find((af) => af.type === "job roles").options;

        if (options.length === 0) {
          return true;
        }

        return options.includes(fp.job.toLowerCase());
      })
      .filter((fp) => {
        let options = activeFilters.find(
          (af) => af.type === "graduation year"
        ).options;

        if (options.length === 0) {
          return true;
        }

        return options.includes(fp.year.toLowerCase());
      })
      .filter((fp) => {
        let options = activeFilters.find((af) => af.type === "department").options;

        if (options.length === 0) {
          return true;
        }

        return options.includes(fp.dept);
      });
    setFilterProducts(updatedFilterProducts);
  };

  const reset = () => {
    setFilterProducts(products);
    setActiveFilters([
      { type: "job roles", options: [] },
      { type: "graduation year", options: [] },
      { type: "department", options: [] },
    ]);
  };
  return (
    <div className="bg-purple-300">
      <div>
        <main className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
             Find Alumni
            </h1>
            <p className="mt-4 text-base text-gray-500">
             
            </p>
          </div>

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <div className="hidden lg:block">
                <div
                  className=" flex items-center justify-end cursor-pointer hover:text-gray-600"
                  onClick={reset}
                >
                  Reset
                </div>
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <Filter
                      key={section.id}
                      section={section}
                      sectionIdx={sectionIdx}
                      activeFilters={activeFilters}
                      setActiveFilters={setActiveFilters}
                      activeFilterOptions={
                        activeFilters.find((af) => af.type === section.id)
                          .options
                      }
                      onUpdateFilter={onUpdateFilter}
                    />
                  ))}
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className="lg:col-span-2 lg:mt-0 xl:col-span-3">
              <div className="mx-auto max-w-2x px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">
                All Alumni Profiles
                </h2>
                {filterProducts.length === 0 && (
                  <div className="text-center w-full text-4xl font-normal tracking-tight text-gray-900">
                   No Profile Found!
                  </div>
                )}
                <div className=" w-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {filterProducts.length > 0 &&
                    filterProducts.map((product) => (
                      <Product key={product.id} product={product} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;
