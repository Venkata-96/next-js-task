import React from "react";
import styles from "../../../styles/Home.module.css";
const index = ({ user }) => {
  return (
    <div>
      {user && (
        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <p>Name:{user.name}</p>
              <p>Email:{user.email}</p>
              <p>Company:{user.company.name}</p>
              <p>Phone:{user.phone}</p>
              <p>Address:{user.address.city}</p>
              <p>Zipcode:{user.address.zipcode}</p>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};
export async function getStaticProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await res.json();

  // Pass data to the page via props
  return { props: { user } };
}
// export async function getServerSideProps(context) {
//     // Fetch data from external API
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${context.params.id}`
//     );
//     const user = await res.json();
  
//     // Pass data to the page via props
//     return { props: { user } };
//   }
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const users = await res.json();
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };

}

export default index;
