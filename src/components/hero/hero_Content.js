const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.7, // Delay between children animations
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.17, 0.55, 0.55, 1], // replaces "easeOut"
      },
    },
  };
  const buttonVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.25 }
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.25 }
    }
  };