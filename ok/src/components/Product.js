import React from "react";

function Product({ product }) {
  return (
    <div key={product.id} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-black-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.id}
            </a>
          </h3>
          <p className="mt-1 text-sm text-black-500">
            {product.job} <br /> Department: {product.dept}
          </p>
        </div>
        <p className="text-sm font-medium text-black-900">{product.year}</p>
      </div>
    </div>
  );
}

export default Product;