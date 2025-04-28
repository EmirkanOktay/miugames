export const handleSubmit = async (e, formData) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data.message);
};
