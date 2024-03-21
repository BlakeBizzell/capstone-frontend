import { useEffect, useState } from "react";
import { useGetUserSavesQuery } from "../../api/capstoneApi";

const AllSaves = () => {
  const [userId, setUserId] = useState(null);
  const {
    data: savesData,
    error,
    isLoading,
    refetch,
  } = useGetUserSavesQuery(userId);

  useEffect(() => {
    // Retrieve userId from local storage
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleRefresh = () => {
    refetch();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Player Saves</h2>
      <ul>
        {savesData.playerInfo.map((player, index) => (
          <li key={index}>
            Name: {player.name}, Race: {player.race}, Class: {player.classValue}
            , Level: {player.level}, AC: {player.ac}, Weaknesses:{" "}
            {player.weaknesses}, Goals: {player.goals}, Sheet Link:{" "}
            {player.sheetLink}
          </li>
        ))}
      </ul>

      <h2>Monster Saves</h2>
      <ul>
        {savesData.monsterInfo.map((monster, index) => (
          <li key={index}>
            Name: {monster.name}, Challenge Rating: {monster.challengeRating},
            Hit Points: {monster.hitPoints}
          </li>
        ))}
      </ul>

      <h2>Random Name Saves</h2>
      <ul>
        {savesData.randomNameInfo.map((randomName, index) => (
          <li key={index}>
            Race: {randomName.race}, First Name: {randomName.firstName}, Last
            Name: {randomName.lastName}
          </li>
        ))}
      </ul>

      <h2>Treasure Saves</h2>
      <ul>
        {savesData.treasureInfo.map((treasure, index) => (
          <li key={index}>
            Type: {treasure.type}, Name: {treasure.name || "N/A"}, Amount:{" "}
            {treasure.amount || "N/A"}, Unit: {treasure.unit || "N/A"}
          </li>
        ))}
      </ul>

      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default AllSaves;
