"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { headers } from "../../../../next.config";

const CreateNewNews = () => {
  const [title, setTitle] = useState("");
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [body, setBody] = useState([{ para: "", textSize: "medium" }]);
  const [tags, setTags] = useState([{ tag: "" }]);
  const [categories, setCategories] = useState([{ category: "" }]);
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const uploadedImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages((prevImages) => [...prevImages, ...uploadedImages]);
    e.target.value = null; // Clear the value of the file input
  };

  const handleCancelImage = (index) => {
    setSelectedImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  const handleBodyChange = (index, value, textSize) => {
    const updatedBody = [...body];
    updatedBody[index] = { para: value, textSize };
    setBody(updatedBody);
  };

  const deleteBody = (index) => {
    const updatedBody = [...body];
    updatedBody.splice(index, 1);
    setBody(updatedBody);
  };

  const handleTagChange = (index, value) => {
    const updatedTags = [...tags];
    updatedTags[index] = { tag: value };
    setTags(updatedTags);
  };

  const deleteTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = { category: value };
    setCategories(updatedCategories);
  };

  const deleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      !title ||
      !headline ||
      !description ||
      !author ||
      !body.length ||
      !tags.length ||
      !categories.length ||
      !selectedImages.length
    ) {
      setError("Please fill all fields");
      setLoading(false);
    } else {
      setError(null);
      const uploadedImages = await Promise.all(
        selectedImages.map(async (imageUrl) => {
          const file = await fetch(imageUrl).then((res) => res.blob());
          const formData = new FormData();
          formData.append("image", file);
          const response = await axios.post(
            "https://api.imgbb.com/1/upload",
            formData,
            {
              params: {
                key: "e782e98f3f33abc56adf17a80a031113",
              },
            }
          );
          return response.data.data.url;
        })
      );
      const newsData = {
        title,
        headline,
        description,
        author,
        image: uploadedImages,
        tags: tags.map((tag) => tag.tag),
        body,
        categories: categories.map((category) => category.category),
        isPublished,
      };

      try {
        console.log(newsData);
        //post authorizing with headers
        const response = await axios.post(
          "http://localhost:5000/news/",
          newsData,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        if (response.success === false) {
          setError(response.message);
        } else {
          setTitle("");
          setHeadline("");
          setDescription("");
          setAuthor("");
          setIsPublished(false);
          setTags([{ tag: "" }]);
          setBody([{ para: "", textSize: "medium" }]);
          setCategories([{ category: "" }]);
          setSelectedImages([]);
          setTags([{ tag: "" }]);
        }
        setError(null);
      } catch (error) {
        console.error("Error posting news:", error);
        setError("Error posting news. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="max-w-4xl md:mx-20 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New News</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Add similar input fields for other fields */}
        <div className="mb-4">
          <label htmlFor="headline" className="block font-bold mb-2">
            Headline
          </label>
          <input
            type="text"
            id="headline"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block font-bold mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Tags</label>
          {tags.map((tag, index) => (
            <div key={index} className="mb-2 flex items-center">
              <input
                value={tag.tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => deleteTag(index)}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setTags([...tags, { tag: "" }])}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {tags.length > 0 ? "Add More Tags" : "Add Tags"}
          </button>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Categories</label>
          {categories.map((category, index) => (
            <div key={index} className="mb-2 flex items-center">
              <input
                value={category.category}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => deleteCategory(index)}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setCategories([...categories, { category: "" }])}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.length > 0 ? "Add More Categories" : "Add Categories"}
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="images"
            className="flex items-center justify-center w-full px-4 py-1 tracking-wide text-white transition-all duration-300 bg-blue-600 rounded-md shadow-md cursor-pointer hover:bg-blue-700 focus:outline-none "
          >
            <span className="mt-2  text-base leading-normal">
              {selectedImages.length > 0 ? "Add More Images" : "Add Images"}
            </span>
            <input
              type="file"
              id="images"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          {selectedImages.length > 0 && (
            <div className="mt-2">
              <h3 className="font-bold mb-2">Selected Images:</h3>
              <div className="flex flex-wrap">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative mr-2 mb-2">
                    <Image
                      width={80}
                      height={80}
                      src={image}
                      alt={`Selected Image ${index}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => handleCancelImage(index)}
                      className="absolute top-0 right-0 text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Body input */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Body</label>
          {body.map((paragraph, index) => (
            <div key={index} className="mb-2 flex items-center">
              <textarea
                value={paragraph.para}
                onChange={(e) =>
                  handleBodyChange(index, e.target.value, paragraph.textSize)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div>
                <h1
                  className="text-sm text-center pb-1
                 text-gray-800"
                >
                  Select Size
                </h1>

                <select
                  value={paragraph.textSize}
                  onChange={(e) =>
                    handleBodyChange(index, paragraph.para, e.target.value)
                  }
                  className="ml-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <button
                type="button"
                onClick={() => deleteBody(index)}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setBody([...body, { para: "", textSize: "medium" }])}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {body.length > 0 ? "Add More Paragraphs" : "Add Paragraph"}
          </button>
        </div>
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <button
          type="submit"
          disabled={loading} // Disable button when loading is true
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {loading ? "Posting..." : "Post News"}{" "}
          {/* Change button text based on loading state */}
        </button>
      </form>
    </div>
  );
};

export default CreateNewNews;
