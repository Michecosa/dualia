import Card from "./Card";

export default function OurProducts() {
  return (
    <>
      <div className="product-container">
        <h1 className="mb-3">Our Products</h1>
        <div className="row">
          <Card
            img="https://imgs.search.brave.com/VISnRvLMUeiRffm6L3AqRyO-jUPZRMHTPP7OmfhQ1ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ub21v/bi5lcy93cC1jb250/ZW50L3VwbG9hZHMv/ZWxlbWVudG9yL3Ro/dW1icy9CQVJQUkVN/X0JBUkNFTE9OQV9Q/UkVNSVVNX0FNQklF/TlRFXzNfTE9XX1JF/Uy1zY2FsZWQtcjVn/ZzUyeWt1aHE1MHQy/OWRqdHFwcWR5NGNj/OHEwY3YwNnQwOGEy/a3NvLmpwZw"
            title="Incenso chill vibes"
            price="€19,99"
          />
          <Card
            img="https://imgs.search.brave.com/DsuQBzfeisga96eTsCeF_0BBnv7rZFEPlC78_AhhfUY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL2FoOEFB/T1N3Rm1sa0VpbWwv/cy1sNTAwLmpwZw"
            title="Incenso chill vibes"
            price="€19,99"
          />
          <Card
            img="https://imgs.search.brave.com/T0YZKKREOyVv4qjc5ju8-vw2UY8HIH0Us-iLxkQcjx0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmNhdHRpZWNveWxl/cGhvdG9ncmFwaHku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzEyL0ZveC1U/YWlsLUFnYXZlLVNh/Z2UtZ3JlZW4tc3Vj/Y3VsZW50LWFydC1w/cmludC1ieS1DYXR0/aWUtQ295bGUtUGhv/dG9ncmFwaHktMS5q/cGc"
            title="Incenso chill vibes"
            price="€19,99"
          />
          <Card
            img="https://imgs.search.brave.com/DehBEe7SJXqpEePfLqC8pJFofRUlfSB2h7QfYsExDtE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEzcW9Wam5LYkwu/anBn"
            title="Incenso chill vibes"
            price="€19,99"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-dualia-dark">View all</button>
        </div>
      </div>
    </>
  );
}
