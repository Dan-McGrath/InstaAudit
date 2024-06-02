const sampleTestimonial = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, libero delectus. Illo aspernatur nisi, dolorum dignissimos quod sed hic voluptate ducimus possimus, delectus tempore? Blanditiis natus quaerat fugiat reiciendis deleniti.',
  src: './images/testimonial.jpg',
};

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center gap-3 mx-2 mb-5">
      <p className="px-2 text-gray-700">{sampleTestimonial.text}</p>
      <img src={sampleTestimonial.src} alt="headshot" className="rounded-full max-w-20" />
    </div>
  );
};

export default Testimonial;
