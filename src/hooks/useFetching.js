import React, { useState } from "react";

export const useFetching = (callback) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
      setError("");
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, loading, error];
};
