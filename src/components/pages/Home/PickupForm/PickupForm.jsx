import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tracking, iron, laundrymachine, timer } from "../../../../assets/icons";
import { hero_one } from "../../../../assets/hero";

const categories = [
  {
    id: 1,
    name: "Men's Wear",
    items: [
       { item: "Shirt", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "T Shirt", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Trousers", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Jeans", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Coat", dryCleanPrice:265, steamIronPrice: 55 },
      { item: "Mens Suit 2 Pcs", dryCleanPrice: 370, steamIronPrice: 80 },
      { item: "Mens Suit 3 Pcs", dryCleanPrice: 475, steamIronPrice: 105 },
      { item: "Kurta", dryCleanPrice: '105+', steamIronPrice: '25+' },
      { item: "Pyjama", dryCleanPrice: '105+', steamIronPrice: '25+' },
      { item: "Achkan", dryCleanPrice: 105, steamIronPrice: 25 },
    ],
  },
  {
    id: 2,
    name: "Women's Wear",
    items: [
      { item: "Kurta", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Salwar", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Plazo", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Dupatta", dryCleanPrice: 65, steamIronPrice: 15 },
      { item: "Saree", dryCleanPrice:210, steamIronPrice: 45 },
      { item: "Blouse", dryCleanPrice: 85, steamIronPrice: 25 },
      { item: "Dress", dryCleanPrice: 315, steamIronPrice: 65 },
      { item: "Top", dryCleanPrice: 105, steamIronPrice: 25 },
      { item: "Lehenga", dryCleanPrice: 315, steamIronPrice: 65 },
      { item: "Skirt", dryCleanPrice: 225, steamIronPrice: 45 },
    ],
  },
];

const featureIcons = [
  { src: tracking, label: "Pickup" },
  { src: laundrymachine, label: "Cleaning" },
  { src: iron, label: "Pressing" },
  { src: timer, label: "Delivery" },
];

const formatINR = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

const PickupForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    category: "",
    item: "",
    serviceType: "",
    quantity: 1,
    paymentMethod: "",
  });

  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectedCategory = useMemo(
    () => categories.find((cat) => cat.name === form.category),
    [form.category]
  );

  const selectedItem = useMemo(
    () => selectedCategory?.items.find((it) => it.item === form.item),
    [selectedCategory, form.item]
  );

  const getUnitPrice = () => {
    if (!selectedItem || !form.serviceType) return 0;
    return form.serviceType === "dryClean"
      ? selectedItem.dryCleanPrice
      : selectedItem.steamIronPrice;
  };

  const handleAddItem = () => {
    if (!form.category || !form.item || !form.serviceType || !form.quantity) {
      alert("Please select all fields before adding an item.");
      return;
    }

    const price = getUnitPrice();
    const qty = Math.max(1, parseInt(form.quantity));

    const newItem = {
      category: form.category,
      item: form.item,
      serviceType: form.serviceType,
      quantity: qty,
      unitPrice: price,
      price: price * qty,
    };

    setSelectedItems((prev) => [...prev, newItem]);
    setForm((prev) => ({ ...prev, category: "", item: "", serviceType: "", quantity: 1 }));
  };

  const removeItem = (idx) => {
    setSelectedItems((prev) => prev.filter((_, i) => i !== idx));
  };

  const subtotal = useMemo(
    () => selectedItems.reduce((sum, it) => sum + it.price, 0),
    [selectedItems]
  );

  const isOnline = form.paymentMethod === "Online Payment";
  const discountRate = 0.3; // 30% off
  const discount = isOnline ? subtotal * discountRate : 0;
  const payableTotal = Math.max(0, subtotal - discount);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedItems.length === 0) {
      alert("Please add at least one item.");
      return;
    }

    // Submit payload
    const payload = {
      customer: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      items: selectedItems,
      paymentMethod: form.paymentMethod,
      subtotal,
      discount,
      total: payableTotal,
    };

    console.log("Pickup Request:", payload);
    alert("Pickup Request Submitted ✅");
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12 px-4"
      style={{ backgroundImage: `url(${hero_one})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated Feature Images */}
      <div className="relative flex flex-wrap justify-center gap-10 md:gap-16 mb-10">
        {featureIcons.map((item, index) => (
          <motion.div
            key={item.label}
            className="flex flex-col items-center text-white cursor-pointer"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="rounded-full bg-white/80 backdrop-blur p-4 shadow-md"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-[64px] h-[64px] object-contain drop-shadow"
                loading="lazy"
              />
            </motion.div>
            <p className="mt-3 font-semibold text-base md:text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
      {/* White Form Card */}
      <div className="relative max-w-6xl mx-auto bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6 md:p-8">
        {/* Floating Online Payment Offer Badge */}
        <AnimatePresence>
          <motion.div
            key={isOnline ? "on" : "off"}
            initial={{ opacity: 0, y: -20, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="hidden md:flex absolute -right-8 top-6"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className={`px-6 py-3 rounded-xl shadow-xl border text-white font-bold ${isOnline ? "bg-green-600 border-green-500" : "bg-blue-600 border-blue-500"
                }`}
            >
              {isOnline ? "30% OFF Applied" : "Pay Online & Get 30% OFF"}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Header + Offer Strip */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-blue-700">Laundry Pickup Request</h2>

          {/* Animated Offer Strip */}
          <motion.div
            role="note"
            aria-live="polite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative mx-auto max-w-xl"
          >
            <motion.div
              className="rounded-xl px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-emerald-500 via-lime-500 to-teal-500 text-white text-sm md:text-base font-semibold shadow"
              animate={{
                backgroundPositionX: [0, 200, 0],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              style={{ backgroundSize: "200% 100%" }}
            >
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="inline-block mr-2"
              >
                💸
              </motion.span>
              Pay online & instantly save <span className="underline">30%</span> on your total bill!
            </motion.div>
          </motion.div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
          {/* Customer Info */}
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="border rounded-lg p-3 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border rounded-lg p-3 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="border rounded-lg p-3 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="message"
              placeholder="Message (optional)"
              value={form.message}
              onChange={handleChange}
              className="border rounded-lg p-3 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category + Item + Service */}
          <div className="flex flex-wrap gap-4 items-center">
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="border rounded-lg p-3 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>

            {selectedCategory && (
              <select
                name="item"
                value={form.item}
                onChange={handleChange}
                className="border rounded-lg p-3 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Item</option>
                {selectedCategory.items.map((it, index) => (
                  <option key={index} value={it.item}>
                    {it.item}
                  </option>
                ))}
              </select>
            )}

            {selectedItem && (
              <div className="flex gap-4 items-center flex-1 min-w-[260px]">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="serviceType"
                    value="dryClean"
                    checked={form.serviceType === "dryClean"}
                    onChange={handleChange}
                  />
                  Dry Clean ({formatINR(selectedItem.dryCleanPrice)})
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="serviceType"
                    value="steamIron"
                    checked={form.serviceType === "steamIron"}
                    onChange={handleChange}
                  />
                  Steam Iron ({formatINR(selectedItem.steamIronPrice)})
                </label>
              </div>
            )}

            {selectedItem && (
              <input
                type="number"
                name="quantity"
                min="1"
                value={form.quantity}
                onChange={handleChange}
                className="border rounded-lg p-3 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            {selectedItem && (
              <button
                type="button"
                onClick={handleAddItem}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 active:scale-95 transition"
              >
                Add Item
              </button>
            )}
          </div>

          {/* Selected Items */}
          {selectedItems.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <h3 className="font-bold text-lg mb-2">Selected Items</h3>
              <ul className="space-y-2">
                {selectedItems.map((it, index) => (
                  <li
                    key={index}
                    className="flex flex-wrap gap-2 justify-between items-center border-b pb-2 text-gray-700"
                  >
                    <span>
                      {it.item} ({it.serviceType === "dryClean" ? "Dry Clean" : "Steam Iron"}) × {it.quantity}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{formatINR(it.price)}</span>
                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Totals */}
              <div className="mt-4 space-y-1 text-right">
                <p className="text-sm text-gray-600">Subtotal: {formatINR(subtotal)}</p>
                {isOnline && (
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm font-medium text-emerald-700"
                  >
                    30% Online Payment Discount: −{formatINR(discount)}
                  </motion.p>
                )}
                <p className="text-lg font-bold">
                  Total: {isOnline && (
                    <span className="text-gray-400 line-through mr-2 font-normal">
                      {formatINR(subtotal)}
                    </span>
                  )}
                  <span>{formatINR(payableTotal)}</span>
                </p>
              </div>
            </div>
          )}

          {/* Payment */}
          <div className="flex flex-wrap gap-6 items-center">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Pay on Delivery"
                checked={form.paymentMethod === "Pay on Delivery"}
                onChange={handleChange}
                required
              />
              Pay on Delivery
            </label>
            <label className="flex items-center gap-2 relative">
              <input
                type="radio"
                name="paymentMethod"
                value="Online Payment"
                checked={form.paymentMethod === "Online Payment"}
                onChange={handleChange}
              />
              <span className="mr-2">Online Payment</span>
              <motion.span
                aria-hidden
                animate={{ scale: [1, 1.15, 1], rotate: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="px-2 py-0.5 text-xs rounded bg-emerald-100 text-emerald-700 border border-emerald-300"
              >
                30% OFF
              </motion.span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition font-medium"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PickupForm;
