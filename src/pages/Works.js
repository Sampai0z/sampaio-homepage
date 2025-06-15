import { motion } from "framer-motion";
import WorkCard from "../modules/WorkCard";
import classes from "./styles/Works.module.css";
import extremeLogo from "../assets/extremeLogo.png";
import salgados from "../assets/salgados.png";
import mokuteki from "../assets/novo.png";

export default function Works() {
  const projects = [
    {
      src: salgados,
      title: "Snack Ordering Website",
      description:
        "*IN CONSTRUCTION* This project is a custom-made snack ordering website built for a local business. It features a login system, a client area to place and track orders, and an admin dashboard to manage products and view all orders. The goal was to simplify the order process and help the business stay organized.",
      linkSite: "#",
      linkGit: "#",
      tech: "Frontend: HTML, CSS, React. Backend: Node.js, Express.js. Database: MySQL. ORM: Sequelize. Authentication: JWT.",
    },
    {
      src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
      title: "Photographer Portfolio Website",
      description:
        "I designed and developed a modern, responsive portfolio website for a professional photographer. The site highlights her work through a clean layout, large visuals, and easy access to contact and service information.",
      linkSite: "https://thaily-fotografia.netlify.app/",
      linkGit: "#",
      tech: "Frontend: React, Tailwind. Database: Supabase",
    },
    {
      src: mokuteki,
      title: "Mokuteki App",
      description:
        "This project is a gamified personal goal management app, developed with React, Convex, and Clerk. It allows users to create tasks, earn points by completing them, and level up as they accumulate experience.",
      linkSite: "https://mokuteki-app.netlify.app/",
      linkGit: "#",
      tech: "Frontend: React, Tailwind. Database and Authentication (with Google too!): Convex, Clerk.",
    },
    {
      src: extremeLogo,
      title: "Extreme project",
      description:
        "Website designed to assist in-store tasks, organizing shoe references and providing a page for calculating cash register closure. No sensitive data is stored.",
      linkSite: "https://extreme-footwear.netlify.app",
      linkGit: "https://github.com/Sampai0z/referencias_extreme",
      tech: "Javascript, html, css",
    },

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevTkT_qgjFi1NbyJTvURy5D9YwYmv_rZSiA&usqp=CAU",
      title: "Expense track",
      description:
        "Web app expense tool helping users monitor and manage spending, with a chart displaying monthly expenses for better financial decisions.",
      linkSite: "https://track-allmyexpenses.netlify.app",
      linkGit: "https://github.com/Sampai0z/expense-track_reactJs",
      tech: "React, css",
    },
    {
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUTERISFRUXGBYYGBgXGBcYGxgYFxYXHRgXFRYbHighGB0lGxkXITEhJikrLi4uFyA2ODMtNygtLisBCgoKDg0OGxAQGzAmICUtLy0tLS0tLy0vKy0tLS0tLS0tLS01LS8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABOEAACAAQDBgMEBgQKBgsAAAABAgADERIEIVEFBiIxQWETcZEygaGxBxQjQlJiM3LB0RU1NnN0gpKys+EIFlOF0vAXJDRDVGOEk5S0wv/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMEBQYH/8QAPREAAQMCAwUFBQcDAwUAAAAAAQACEQMhBDFhBRJBUZETcYGh8BQVIrHRBiMyQlLB4ZKi8VNi0hYkQ2Ny/9oADAMBAAIRAxEAPwDD8OsHDrCXrpBeukcOCvqttPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS8OsHDrCXrpBeukIKW080vDrBw6wl66QXrpCCltPNLw6wcOsJeukF66QgpbTzS3nSC86QvHBxxCtfXokvOkF50heODjgl9eiS86QXnSF44OKCX16JLzpBedIXig44JfXokvOkF50heKDigl9eiS86QXnSF4oOKCX16JLzpBedIXig4oJfXokvOkF50heKDjgl9eiS86QXnSF44OOCX16JLzpBedIXjg4oJfXokvOkF50heODigl9eiS86QXnSF44OOCX16JLzpBedIXjg44JfXokvOkF50heODjgl9eiS86QXnSLjAbOR0DPMYHlQKCPWsdYvZ0pEZhNclatmg6e+JAngtN2PoNmXG2nJUt50gvOkXy7KlEA+LM5D7g/fErZ+7iTpiKs5gCeIlBUDpaK5muv+UUc4NBccgoO0KAE7x6LL3nSC86R6RhdwsPNUNLxM1ga/wDdjoaHImvMQ9/0bSv9vO/9tf3xqnH0AYv/AEn6LF72w36j0K8xvOkF50j0jEbg4eXS/EzRVgg+zHtNyHPKM1idgpKmTJcyc1yOVqqChApQ5nnQxlo4inWMM+RGiu3aeHdYOPRZy86QXnSLvF7OlIjMJrkqC2aDoK6x3L2TKIB8WZmAfYH74zxor+8KGW8eiobzpBedIuMfs1US+XMLUIqGUDnpnFRxwWxSqtqt3mEkdyLDrBYdY5omsFE1iVaB6K6sOsFh1jmiawUTWCQPRXVh1hRLPK6OKJrChF16j5wQDTzTWyMFjNozTJwClrc2eoAA5VZjko0HM0h/eTdjamzE8TEC6Wcrgb1BPKtRUefKpGsaL6DN78JgvHw+JdJRmMrJNb2CVBBV2+6OoJyzPI0ro/pFl7QmbOmz5G0ZOLwrBrgsqTSwMQ3hzFH3aEa8JzrkewKNMCIXzh+08XUf2hqEHQkAaAetV55jd0NryUkvMtAnvKly+NDVptLAdOYjrFbm7Yl4iThWt8WcJjIL0oRLFWqemUewb6f9m2T/AEvAf3kh/eH+PtmfzWM/wxE9mz9I6LH7bif9V/8AU76ryLGbgbckoZhlqbcyFMtjTy6xU7B2btLaLMmElex+kOShSa5Mz8jkchnlHv2H3ltx2Pl4mdLTDyJeHZb7VAvE28ljm1bVy9IpPox2kkzCbTxOHAVWxmIdMungyiGI75tTuYjsmfpHRWG0MWGlvauv/uJ8zceETxXle2dydsYSS8+fastBViHQnn0HWJcv6N9usoYBaEAj7RORFYv949pmfsczJu21mzJkmWz4b/qgN7BSyUVQ+RqKc8o9H2/tadh/4NSUwUTsRJlTMgaoZTkrnyzAzGeUT2bP0joFX23E/wCq/wDqd9V88s2IkTzhsYplzByrqeVaZFW1ETbDrGj+nqcr7Sw6KpBVBcxFA1z5AHrSnxjNsEqc+saGKYGOG7xXrtg4qriKDhVM7pgEm8RlrCWw6wWHWOaJrBamsasruwPRXVh1h7D4N5jWqSxPQfM6DvDUuUpIAqScgNSYusVNXDr4Msi4/pGHX8oP4fnz0pIusb3RAAudctfXykiN/BIGRmVb8Ki8eVaip9xhzae7eJw6h5gYKaita0INCHocjXKhpBsnEskxXUXFWDU8iMienKNftHb2CaSwuYznL+IWXJw7OxFFJCkMyGv/AJYEXa0OBla2JrVKLm7rZaczf9iA3xBmbZSvOrDrBYdYcm4dRyYEaj9o5iGaJrFCtwFrhIjqurDrBYdY5omsFE1iFMD0V1YdYLDrHNqawWJrCUgadVcYR5oU2ohFeZcg8h0pAzzp0o0SWA6mlXNQCNLYTC4oKpXw5pz5hGI5DqBCYPGCXKUOk0WqASZbUFO9IzCcwL258l5GuQKjgXQPi5c+75pydiJ0tQTLlkcIymHqQB93WNBuo83x1DIgFRmGr8KCM3jcXelFlzuaH9G3IMCemkaPdPGBp6rbMFSPaRlGXcikYMSPuXW4Hny71jJz+LhprovTZOOlS1o0yWrZmhYAnnTImsMYDF4p7CxlWm26iPkDStDdzhtpYPMA+Yh7F7WRUsksniVVQpBIGYDZZdKnnGts/HPqMbTDuzbTaJyO94EWyJMXk2XKrUQCTG8XHondqNxoNQ9fcUp8zHlO8jzRi8TaiEeIeb0PTpSPR1WYz3zXuNLQALVAyrlU5mgz7R5vvLjAuMxIsmn7Q+yjEch1ApFaddlfG1KlISN0cDcyL8PO9lt4Vm4A1xjPl9Cqhpk6dKNElgOpGbmouFOVsdTZ86WgJlyyBaMnPUgD7usNYPGCXKUOk0WrmfDagp3pC43F3pRZc41Kn9G3IMDpoI6cXiLTr9Vs73wTvXjTOOUd6exZmmWwZUUVGYmEnnpQRS2HWLrGYoNLcWzBUrmyMo56kRR0TWMJzXpNmx2PO54oqukFV0jq/tBf2iq35HoLmq6QVXSOr+0F/aCSPQXNV0hQyVGXWFv7QomEZ00gpkegpH0db2rsufMkTsP9Yluw9lVMxWFc0B9qoNCtRy5866n6RPpNXE4dsBgsLiJbTQFbxJYRgnMrLlCpNcxXKmfmH/8AR42fKErFYx1DTVYIGIBKqEua3QsTn+qI3uz97MLOwDbWGHYBEm5EJ4lEYhgDWgqV16DSO6vlRLSSWiBwHIclhN2vphlSJEuRtLDTxOkqFDKim4KKKxVypRiKdjzyrQVH/SU2I2rK2gcLiDhcOk1FWWt7C9CCznJQSSuVcgOvXU/SpgMPtDZ+DxYQoZr4cqaC5UxBUFSeXJq+YEbLFbWw2AnYPZySSBPDrLChQiCWoJurma1goXzlv/t1dqY58Rh5c0KyqArAFuEUJIUnLPWL/wCjT6QP4ISbh8XhpjyJrXigAYNQK3C1AwIC9RSnWsembt7Jk4fb+MWUgVXwiTCAMrmmgEgd6A+dYspuKwm2JWOw7SCBh3aUxYLmwDUZKZjlkecEXnW+P0gbOxeBnS8Ps+dLZxRZhkygo4hzZWNIkbV+kyRjDgTIwuLb6pPlTZtEVuFZbKQtrHOpyrTlE3ZyAbpHlW3ECv8A6mbGzlY7C7HwmAkLJJWe8mQLQubzFzmTK86nM+cEXjH0mb4SdrYnDth5U5LAVImBQSSynK1jypEN2Wpy6xo/p12ZKw2Pw82SoVpgLNTKpVlAJ70NPICM6z5nLrHPxmbfFew+zO72VTnI4aW/dc1XSCq6Qt/aFv7RpL00j0FZYaekqT4iqDMJYBj0oAQRoasc+0U+EnGbOCVzYn4CvONruCiuZooPEoDLqAfxVoCOfLOK5thvMxkt5QChnuchRRDWrNTKle3XzjPTgi689j8VUpVS1mci/eJy+V05P3UmP4fiTzIlNaqqopc5JzbI0UCmba5kRdbT3EJkoniIs2pFQtpLIrmg5gVK1I0BA6Rz9IO1pSGRJmozSrr2cNaQRSig8swW5xZ7H3wl4uaWIIVXJCtSqluTVFeYNKg6942CGik195vP7Xj6rhPq1alZwJ5QSSTle0/KPmvMlAXI1JPP9wjmq6R6P9JbyGlo6qPFLUy5lLWrXWhpSup7x50WI5qRGk4yV7PA1G1KIcG7udonz4rmq6QVXSOr+0F/aKrakeguarpCgrpC39oL+0FMj0Fb4HFS1WhamffSF2hjEMqYA9SUagz0MVHinv6weKe/rFgQDMLku2YHE/eZz+U8fH9ley8dLoOMchrFvu3tKUs0XTAM11jF+Ke/rB4p7+sUqND2FvNR7rBkGp/b/K9mw22pVo8SbKuzrbdTmaUqK8qR3iN5A4sMySEquYL3UUg8qU6R4t4p0PrB4x7+salHCGiHCm8jeEGzcr8wea13bCY6JqZf7T9QvZp+2ZWVk2V7Qrdd7PWlBz0jCbd2hKbEz2VwQZjEEVzFAP2GMp4p7+sHinv6xOGwjaDiQSbRw5zyWRmxw0z2n9v8q32hjJZlTAHqSj0Gf4TDsrGywoBfoNdIo/FPf1g8U9/WN2RyWT3X/wCz+3+Vc43GSzLYXgklaDPoYo6rpHZmHQwl/aIW/h6Ios3ZnwRxwccFh1gsOsQtqDr1RxwccFh1gsOsEg69UccDX5+TQWHWEZDnn0aJCgg69V6D/o//AMXY7+cP+CIXdr+SU3+bxX+I8J/o/wD8XY7+cP8AgiDdr+SU3+bxX+I8d0r5O3IKx27/ABFsv/d3zlReb27Jnzdr7LnS5TNLk+OZjjklygLXzMUe3f4i2X/u75yo1m8O8z4baGAway0K4ozbmNar4agi0DLr1iFKr9n/AMosT/QZX+NDG6DJ9X2l9X8P6z9YxXiVrzLP4RfUW05Q/s/+UWJ/oMr/ABorPo1/Sba/pL/3XgipdnV/1RNeduIr/wDJmxcfSX+j2N/TcJ8oqMD/ACRb9XEf/ZmxsJGz8PtnC4Cek4hZDyZwC2k+JLXOW+lDUEQReef6RX/asH+q/wDeSMm19T5mNF9PG0Jc/aGHkymDPKUh6Z2szKbT3AFT5xnFzNyvcK1+Mc/G5jxXsPsxO5UzzGXcZ6St5un9Hc3Eos3EP4UtswoALMvYcgNCak6dY3svcbBrK8ISw1ObN+kJ1DilD2paaZjnFFsne8hJd2aNYop92iKCPWvwjW/w9KBRbhc/siuZ8hG3Tw9INBF55rh43amNqVSHuLd05AxBBPK5Op+S8g3gkNgcQyh6crGUBKq3scgKHoRqDESRtiapLqQxPOuVR1oRkD3pD2+Ew4vHTg1LVMwD9VC9M/jGcweGZcw7EdABX16mOe+iQ01GzugxlYcb8s+K9fSqNrBlDENG+WB2YBvNwLeMZHRbXAbYkYgWOASQQQwo4HkedNcxDL7lYKWPGWdMkqozKTGBI/CM610AyisweyXxLMqIXtW80oCLcsietKZdYqcZ4kuT7bABnCs3FUClQbuRtdT6RtVsOabGvpuzDS4cWkzZ3G8S2QC5pm8Erg0aNOriH0ajhLCQMpcBB+GdDBizXAjktpsWZgkuM+SRRfElsxZytKhA+ZuuAUkkZlvKNHtPZ8raeFLKFE5EJlOKKXHOwjqppQV5etcLuztKXOkMCG8QcLZn7WWaAFa5Bhl7q9onbO3hbAqRJmAtnQUuA/WbQdAK+6Mh7JtOHRfrP1Wiz22pi/uA6Wn4bmGtmwnLdjwKxZDg0g44CpzNYLDrHJX0Eg69UccHHBYdYLDrBIOvVHHBxwWHWCw6wSDr1RxwccFh1gsOsEg69UccHHBYdYLDrBIOvVHHBxwWHWCw6wSDr1RxwccFh1gsOsEg69UccHHBY2sFh1gkHXqubF1gsXWC5IKpE3WOG6IsXWCxdYKpBVIXUwNEWLrAyLnn0aCqQMUz8mgoIbos5szCTHluZfj15UloSpy+8wYU9DF/g92kmBklTNpsFIDqmDqASK0I8enLOKjYEtSrVWWcx7Uue/TWWaD3xZHCpUELKFGDECRi+Khra2eYPI8ucdPFUq1Rv3NQsPcCD3gj5Ea6fLKRaB8QlTG3OJAUja5A5D6jkPIePHC7ptMxWHk+JjZZmswD4iQZVtq3cH2puOXaJuz3kzAA8jAy5hLAS/qmPckL94WzM8s6dIsdj4VE2lgbZclavM9jD4qRX7JuZnk3e6POtxeNpVHNqvdIa4wWMAs0kXBM3g8RZbZZTIkAdTzSv9GFZry5W01bEIgYoUYG08qkOTStNYo5G5MwbPnY04hkZDMDSwDmZcwqQXDZ516R6zI2tK/hOfhBKRJxkK6zgBc4HNSSOlQQMxkYo9gbPafs3GbO8QfWUmT0e7Iku5dJjAZ2tWtaa6Rgp7XxbWjtH8WHJv4TMmwyNtZgZqxpMmw58+SwuH3GZtnSsX9aIE1pa+FaaDxJ4l1rdnSt3KH949xsVsyxpGJmGVMZZcx0ullSzUW8K2a58688uojabZkDAbMweDmupmmdh1FteIieruVrnaOVSB05VjQ7b3gkScVKweJVbMQhtZqFbwwFjA5UNcjr5xcbYxXabzTvNl9oF2jIi3AX6yq9i2L5wOq8b3x3UbZM6RSeZpmXGtltKWg/eNa3R20tKkVjRfTp+nwflM/vJGfcpU+cdDD1318LSq1DLiDJteHHlC9P9nwAKrbRLc9W3+Q8lP2VimU2qwIJHDzodacxlXlFtjN+JiEILaKCFIGakjNkPU8szpFbcslbEAvYcTfhB+4uhpzPennmsdPufyyjubJw/aPIebDh38u+9/DiuRt/FUnVA6k0TlMZkcTzAsADY3mRAWjk0SVNmXXFhaCcznWp86VHvMVsporZOLorIcgxBroRyr6mJOGnryPOPU4GnTwrBSpniTJzv3aQPBea2nin46qa1UC4AjhYa8zJ8cyr3Z205sh75LlCRacgaj39Y4x0z7KWC2RZnp3PDWvcAekMSJi6CJWIkq6Vpmgyt6jqLep/zjDtrC7+FqVKbRvHdLjxIZN54xeOUmFufZ2tTZjqbauUENBFt51h3Tcd8DVVhP5jHFi6xJkYF3FVlTSNVDEeoiObY8HdfUZabWtqksXWCxdYKpBVIXSG6IsXWCxdYKpBVIXSG6IsXWCxdYLkguSF0huiLF1gsXWC5IKpBIboixdYLF1gqkFUhdIboixdYLF1gqkFUhdIboixdYLF1guSCqQSG6IsXWCxdYKpBVIXSG6LZbS3ektL8aQ3BQFSKENd7IW0Zn9xjN4zATJVC8s0IBBoaEHkQdPKLzZBMm4I1ZasrSx0AnKSMtaDL+trF8+1JMwNK8MPMUAZrWWLuZY/etOVB1oMsyNXeewxmNeA17hE+K+aYH7U43DO3Kv3jebrOA/+uNv1Akm28F5z4n5YPE/LGzx26VQDLYVKkiuQJHTIZZVMZjG7PnyTxIaHqQaEa9x5RlZVY/Ir3Gz9tYPH2o1Pi/SRDunGOJaSBzUPxPywCZn7MFX0gq2kZF1r69FULst0J8Ge6Kc8rl9aHOF+pYn/AMU/9qZFtc2kFzaRse1VOfyXHOwcDM7h/u+qqlwOIDBhinDCtGrMqKihoeYyjt8LimKs2LmllzUkzCVJ5lSTl7osrm0gufSINdxO8YnnAQbBwI/Iervqqo4Cff4v1mZ4nK/7S6lKe3WvLKBcBPDmaMTME083HiVOXWZWvQekWtzaQVbSI7d2mUZDLlllonuLBfoPV31VVO2bNmNfNxDvMFKM1zEUOXETWEn7NnTTWdiHmEDK69qf2jlFtc+kFzaRIxDxGVsrC3da3gnuLA/oPV31Vd9Rmu6tiJ0ybaKhWuao0qxNBFj4n5YLm0gq+kY3PLongt3CYKlhWltEEA3NifMynJs243cVbRWgrWgoKe4CGSkvl4S+pu86846q+kFX0izaz23a6O4wsfuzCkkmmDPNs9AZA8IUY4KV+F/UU9bf2Q8ZMqgXwjQdamo8j+zlHdX0gufSMxx2IObz1+ixt2NgWzFIX/2z0mY8Ez4XhlSGJVshXoacqRZS8RRcjnEYIZgKHmeR/Cf+fnEaRNPI1qMvf5R6jAbXAwhe8/ELd54W1424dfCbX2OaGMDGD4HXGdh+YSTNu+YI1Wi2Ti1BF5OQ58s+2kM7wc0cqCzrcdSLmAcjpcoU9+fWIkhfCN0xbiOSHlXoZmo/L6w1icVNmMXc1PMkx5CoZK9fsnDVQe1dIEWtnPG/WTyTN/5YL/ywVfSCr6RjXevzPRF/5YL/AMsFW0gq+kEvzPRF/wCWC/8ALBVtIekSJr+wpOVTTOg755ecCQFDnbokm3cEz4n5Ydw8tnYKqVJApkSMzlQRZphpaACaePhY05KprStRWvzFNYVtoKOKXYDbblzAqc66mnOLBjjkF5fHfazCUN9tIl7hvDKG7zYgE8iTmBENcQfwzF2ps9pBFwBLJcLTWlSaAmmWYMRJCM7BUQknoInvtK+gcVAFppz68Q9TE/Z01JBDpRnD1GYKlR93lUiv7PfYUyHAOy/Za+D+1+H9nBxRIq2BhtiT+YZ/C380mRFgd5s3qbnBsMoWSwnkLUMCOIivlT9kZbEbEmyp8uTNVVLMFr0BLgGuXSojfSd8MPMV5s7EtLm/7GWAVvUUQ3EVPIVHaMXitoTJ8zx5rqTWoy50OYHDnkPdSMlVpLTIAP5I5Wu6wvzWXD7cNKmald4DSC4TmTaAJzEkC4kccnbu4H0d4WW8tjMaYgBMxMqnVgV5KTz+cY7fzZ+Fw85Rhc1YVcZ8JqevPMZ0MbNtvbPGGV0ntLZQquopdMFRcKHqBcailM4zm/28UjHeH9Vl1pkHtocweE9uZjUDN2+YtHxEm4O9vTYQeUqmyto4itimNe4ukGRaOcxxGvS1liPE/LBf+WL7+CV8KmYm5NlQihANAKVu5HyiDtLAGWFKsJhPtWitDpWvSvxi/guzhtu4HE1hQpVZeXOaBFyWiTFsouHZOvBK1e8eBw+HZvAExPEqWBDKAUJttPIUDEZaCKTBz0UWST7BJz+8GpdXrS75gxf7ZdJ6gVK0NQSGHmOVD69Iz+0cOkq0oxOpANK1iQ0PHxfiPS3Pwt3SvA4nAteXOBv+4/iynYLarSjNN958WY4qaC+ULXl/lBkhafqnWLGSZc4GZPIaYzKuq8R4UQdABWnvPWMvNmBFIoT4gu4hkJvVvT9kR8LPPArvwy6kag9G7kDIRR+FME+j01XNrYJ7JcOBBkZ94jkf8rVLupLdjxsmV3NQLOTGmVKdf1hDKboVFwZgDyqRWnSvekR8BtAYlAC3GT4hAqKVorKB+EUUU6gxPxm1XlIZiBplz2ovQGwBWOim2p93eNZzazTuzfX16Nlse+9q0zudu6Ra+6ctSCfEps7mCrC85eWogkboK1QHYsCKjhyB9k++h9Igjb+IEqXVKzFp4zHIOq1U2dzmexXvHG1sZODCfIdkCIyV6m7qwPelulAesAysbb3+f5U+/NqzBxB6N/4qdN3USrhHY2A1NVpcOYGXQ5edYjy90WP3jSoHMd/3RDw21W8JJSqwNVEwiuQl5gjW5gCfIxaYTaxFaVYIrnn7TWnrplQeZizm1W5H1kOqO27tZuVc9Gnu4evBOLuYDbRmNfLnXMRwd0FJakw2rWrkrTh9s+QIIr2iPI2xi2M5qhA9tgHOTUUJH4jRf7RryyhZxYSfqyt9lSj55kHPwvI1BJ706mKxUb+J3LLlx8eXNPf+0wb4g9G/8edgnpm6IRqPMNtaEgjKuQJ7VI90c4vdeVJCmdMdbnWWg4CWZiB6CtSegEcSsQy4cyy4JAMm4mpUU4bgebeEVoe/bOowbmY9Z80t4UuziNSi09r3jrzJizGvMkuy5ceXmpbt3aZknEOtyDfD8qvDueACSzZEAezmT/lU+6EmbnCtqzQZgtLJw1UNWwkdK2t6RUNtvFYmZKMsmWJXEwPKZMYFRcNCKCnS5u0TZOGm/ppcxlxU0te/QggC2nKiilNLRAtqMHxvg/vrpA6wpO3tqN/FiDPc3z+HKF0N0nLlVmKQtQzZe0OYGtDkTrXSGsTutNl23Otz+woNS1KVb9UAip7jUR3svaYFJAu/B4oyVpdCA4NcjMNF/rVjgYeXLmgyZjXShYTUlUqK/V1H4QDUjV8qERbeeCZPdbpPeVJ+0G0xM1j0b3Xsu23Pn5UKVIrz9OnaOjubiKqLpeffvTSH8TtTESjMttmMaGWTyQsi8LdSF6dddYWftmYA4VWLMKyycwjTFzD06Lm3f3xSaxyIVf8AqHap/wDPbub9FGlbozi1pmSwTWmdakZkelT7okHdEq61dfFIrlzC8ga6k1p+qYjYvGTcRJW25JgIZiKijyyckPnme1B1iJgduTV8Vmq81iWltrUWjlkAtKiLtFYgkOvl6049yq/bG0qzYfWkjRljz/DylWH+qpJOdRxZ1GYFc/fSJC7nAqTc1RTLLkep+PpEXCY8qAgLZ0B7KOh7mlPKuoh3EbaxDYgGWoEtPEVlrnN61u+7S0U/raxjcKs58/46p792sSZxB6N8Pyp6ducoIQMxalWHBwgnhr3NG9I5n7m2ioe7mMmHtAkEe4ikcyMVOl3zA4M6cSWJ5DIC8DqEBVQPLvDWyT4N6lrlP2wVm4i3Ka1T0JKE92J84JfeHZR48/PLRD9oNpxbEO8Q3x/Lz8lJbdOUF8QzGEoLeXazJe4pz6U1hrB7rJNVJis4R0EyrBaqpWvENQOfcRSYiY7uZTzSUeYZwWtASRmqjQdB5nnnDu0NrzWR8JILAswXxAaUU8Tqv9aorpWMwpVLfFrPAD6/RZBtvadv+4dzmG5f0q4G6CUF00qWyRTZVmCliBrRQTDw3cMsLLVzeeIjLJNT5sMh1t7RW+DMnHxJ8wl5agSWXK3MHxcvvNkTCLtOZImN4106Y1HJUcphAtknsFtPYRRvafldJ/f6RnqtbFbVx2KpGjWrFwOYIaAYM8ALCBxFwrHGbnIAzzJ7iWObG2tSRRberEkADqSIiytyeG7xGFTQBra60JHUCGdqYaSzD7RmeYfFyYgG2n/WCBybMKPPLJYmTcfOXw2L+IpDhlAFagobweVTyI5ZRbtq26IefEdOHmuZuwAAY70SdxKmjTiGOYFAAR1odRz8vfR1N1a08KYSp9lmpxD8QA5KekcDarTEvxCAvxDwweFjU2Cv4bSAx7HUCK/CbanpfJLF533Jmgm8TE/qXEqO6jpDfxJB+K47o7x5ftN07NzhHH9lJfcKTa0wzpnhgVYiw5qaFVFOd3CIambp2KhZ2AZgABnQc2bvRa9MyQMqxWYnEGW/g+I/hh1a0ezcF9r3H4isPTdqzGmGelzS5IElV/EGYGYw78II7IO8ZfvgZDvXAd6zOa8xe2vkFaTNwkBZ2muFANWFpqCKCg6k1FNSRD+A3S8JCxmNblXJSUJrx0HO3kaaxSSnxE4IXdkkib4smWDQi1qSwTzIBUsAcs/KlzP2/wCHQsbgGtZV/DXjbsbguXu7xhea+W9J9W5T4qA6o0FjXTYg9xERpaQcjmFIfYC+KE+ssZjgkUAs5AhC9faKmoHbuK8YTYALuEnng4WYEKLzmyg9aALXv5RQz9pq9zTyEL/aIi5WS68Cin3rqtXmSSYrZuP8SWktiFRakhQTc9TxEVyoDT3n3bIp4hzZDj0HUW8OXEKwwJe34Rb1kvVp26uFf9BimU97Jg9MvnEaVuhh6HxsY5UGhFiy6nzYtlXSFTaiMM2D06ZMfQxOkYpE4rkWulq/ERhFR69Xu8AUxO3SwUy0S5zBlzAuRhpmpAPoYpsb9Hi3EtilsJqTaFIHXMsYvG2gjt+lUjQ0NfWGJ81FzBlr3oo+OUWFeozinZg8VmNqbsScMQ0jEVLVWtVJ4lzqKZ/5RBm+IQK0KqakqKCpoAadOvrGqnYpJoCvMRs60PLnlQGDB4CRKuZQmetppTPKvKMjqwcPvBJ5rWrYKnVz/kLJ4pyhAcjLkoIyBztPfP4mK2aZrKqFgES1iT95gKKp165fujf4hMPNIMyYpYHnUCoH3T0ip2hu/LLl7h4ZNbVFaE9tO8S11PlHqLd6wO2cwXZbL5cFnpOLtPQAgg8q1yz91KeRMdIkyaRYwFUC5iud1a89MonYjY6KCBNQkHLPKneLXYuBlIufhs1a1oDSo/dFi6k34gNIUt2fT3wY4QqUXJXMLzBqR7Qp07ftiLJwzSlyJe9y+ZqSTzz8x8Y186bJmUV2AANaZLn1yHSJhw8lypVZLW8q0oB6GsUFRgbulvoa9Vf2Clu7o/lYmdsUyqvMncc0B2BoBU8xStchlzyhJe75BE5Hqa1IyatpBowHTL4R6HiZsgC1zLHaij0AiP8AWpc0kcDqK5m1vgdKmL+0nPd7+7ks3szL6iPBYYSQwaWDb4hqTWlKZ0r0JK0hqbg2o9s5+IZ8iacsh0qMo1n1XDSWZgUUnuBQaLp5QoXDzSCWRyOQqPlFWVmsEBttfXcsdLBMY3dz9fwFkJ2GJl+EzFBw3HkSFoQO2YB90GBwCys0eoY5gkGpHXzzPrGzxGCw61eyXUg1OQHLoP3RJRMK8vwrkI6ZjTmIt27d3dDbHP1zFo7k9jYGFnArCtMmA1cHMkjKlak0+GVe0OTJ56svJaioFSBxH5xuZmElKQSJFFpbwLUe+KpsNIDtMLhiWJpUUFTocopvUyT8PrJYjs2kZJ/x6zWQmTZpuWUaCYxFa+ypUBmB6VAOfeCRO8MKAVJUjM8iFOfP8VKGNTtHZEuaAUKr0NBzBOVaHnWK+ZsWUvKYoBGQORr3EZGupRJHh4R8lA2e0OvccOirjOMz2GAo4bXIA1U/D0h6Xh5kul5FwAa48II8q8+lPOJ2xtmSwxMwy2qKAZHzMXk6fLAKFlUEUNAqinTzMY3OY34GtlWZs6kGQVkDhze028tVQhGVAOahR05H1js7IZwuImTCgUlEXIZUrUk86k/80jYScPh2Tw18NhzoaGpGeZ5xYo0qWgDiSo5UAUDn5CLGuN7eDdPBZRg6YdvaR68LLzpNheNxCZmnKhGvMDn8YeEvwmBYC9ECDKgNORp7s42rYyVkiFGGlVyz0PQ1MQ8VgcPeJhCAj9UCvQkdtYq+sHQ14sMvp4qtXA06jQ08Fkv4PsICzjVSQOJSD7uo+UcYeTMlhjcSxLEORQ1P3uedOkaxpuHmcJmKe1flD77Ow5ANks28vZHqeR98XOIa6z2+vRKu/CMfmsHhNlIhDrMNyjmWBy5WkaRKns9eRtAUZDrmTn15/CNvgHwyhuJBcSGWoI58vhDh2bJCgKJNlSTcqsczr8IVKzXn4h69ZKtXBsq55rDeMSBcVHESK05UH7RWI77HmXKwepcMb+udRU06+nSNjtDDyHcFpiABbbQQBzOkPy0lMPZQgZCqoYgVmNEhveobgKQsFhW2YUtVnBKi0VoCB09IlpKNBb7CjOn4zQAk6cx/WjWGfLBBDShlyAAPw/dDmGlSACFVGvrXJWHepIy8oq+s1wu31x9d6VMBTfPisg0winIfhJ+dPOsd4Tdl6NNRrqijAkNW7OpAz9qhMa+dgsPcGcoKAC0UANOWQ56RJlzkaovRh0BCmnrEisGthrc8/XrNTTwVNgLRxWewG4SMBMxWItdmzFFXKncnPtpGgTdDADKXOZT140PzWOJ+IVOTy19yj5UrCJtNW/7xD5kV+MY34iq71/C2RSA4p6dubP5yp8mYPzgr/wAYMEndTFdZsiV3Wrn+zao+MTEboPEpX8dBXyWkPo1PxDS13H7Yx+0HkrbrhxUDE7oTVoFxUt2P3XUpX4vX0iGu5+KqKthkGoLE+4WD5iNHQ5EzJpI5ZrlXnQ210jnESQc+I59Xc9POLGq5VAdzVM+4swCqYpWbqGlkA+8MflEaRuniTldhMsiQzH5S4uwxrwPMHa8n3cQakNO9AaF88zxW187AKmI7cjMKQ13NMnc6dSoxihtPDNPKt/7IhtutiSSA2FNOZuPx+zqIlyCajN/7bj/9Z++JqXVNrOCczQp6k21JiBiNE3Xc1AlblzCKtiVDaBCQPeWFfSK+duTi68LYVx3Lr6iwkepjSvh6g1LMfzO5/bSHAopwtMWmjt07NX4RYVXcVEO5qiw2486n2mIReyIzD1JX5Qk3dDEg8LyHGrVU+lrfOLYYi7781hoWAz72gQ3MPWh58w7g+t0VNchA1x4qFI3Tnk0fESUFPZQFj5/chvF7m4j7k2TM/XDIfdkwMT5cwqSQ0wNyJuU/EqT8YZm4zOjGYx7u3LyBAh7QVO47mq/D7j4pj9pOkS/1AXPoVUfGOp+405f0eIlOfwurJ8i8W0mYehdfJ2+RqIcl+17UzPI5qK01IUE+sO3lC1/NUmF3NxVeN8OndSzH0tX5xLnbpTVoExUtiejqVrTQhm+UWk4ACoBp+s9fW6sN+O2RDzB/WB+LKTEmuZUbruaqDuliieeGUahj8AJYr6w7N3Km0qMULu8sget5+USpmLNc2mHpmx+S0HwhsY4BiAZisM8nalNaVI+FYr7QTkp3Xc1VndLGlqF8Jrm7EnvQy4spO5L28eJFdEl8I7DjFYcmzSxBZppPIG5QfUKD8Y7QH8OdeZdyfW6HtPIeSncfzVTjdysTmUnSHGr3IQO+TD4wuA3Lntm86RLB/wBnc/zt+cXJxNv35qjs1c/6wMSUlqaCsw8qAuQKdMloIuKxIyVSHZSqSdudOH6OdKmDRwyf8dYWXuviKgNNw0qulWJ8havzi1lyafiBHVXcV8844m3ZFnmNTMVKHMdfZqDEduRmFO67moGJ3Nm04MQj/ldWUeoLfKK//U7FV4pmFlrqGYn3CwV9YtJ5JYmrcuruffz5+UPSzVRUvQZ+1dQjqL60MQMQeKncdzVdN3Em/dxSltDLKj1DGnpDEvczF1zOFA1ub4fZ1rGiVGb2nmHteR/dAjuVIUE5EZ/ddx+2JbVcqw4cVWLubNAqMUt2hlm31vr8IizN08XyrhT3qR7/ANHlFvPxVhC3zhdy4lOfTmscua5ZnPO5mNfjSJ7YhA13NV43MmUrMxSqRohIHvLL8ogTty8WDwPhWH4izg+lhHxMXEw5Z3gVAoHJHbhao+EdTsWwFWeaVA/FTIU/CAesVGIPJW3X81Cwu5E6n2mIlr2RGYe8kr8o5xG6OISpEzDuNXJX4FWHxiZh5wPIN/bcH1uiQxJHE0znkLgRlmPaUwGIPqFG67mq+TuhiT7WIlSh1CKXr/cp8Y5xW588exOkzB+cMnoOP5xcywCKm5j+Zm+QIHwhgGhyLrz9l2+RJHwiTXI/woDXc1TyNzMSx45siWD+C5j6UUfGHZm405f0eIlsPzqy08qFonzJ7AZvNP8AWA/uqD8YbOIyqFZvN2r6loj2i+SncfzX/9k=",
      title: "Mario Game",
      description:
        "Traditional endless running game where the goal is to avoid obstacles, featuring Mario jumping to evade pipes. *Only works on Browser*",
      linkSite: "https://mariogameteste.netlify.app",
      linkGit: "https://github.com/Sampai0z/mario_game",
      tech: "Javascript, html, css",
    },
    // ,{
    // 	src: "",
    // 	title: "",
    // 	description: "",
    // 	linkSite: "",
    // 	linkGit: "",
    // }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classes.header}>
        <h3 className={classes.title}>
          Here are some of the projects I've been working on!
        </h3>

        <span className={classes.work_card}>
          <div className="container">
            <div className="row g-0">
              {projects.map((project, index) => (
                <WorkCard
                  key={index}
                  src={project.src}
                  heading={project.title}
                  description={project.description}
                  linkGit={project.linkGit}
                  linkSite={project.linkSite}
                  tech={project.tech}
                />
              ))}
            </div>
          </div>
        </span>
      </div>
    </motion.div>
  );
}
