import { create } from "zustand";
import { combine } from "zustand/middleware";

const useGameStore = create(
    combine(
        {
            squares: Array(9).fill(null),
            xIsNext: true,
        },
        (set) => ({
            setSquare: (nextSquare) => {
                set((state) => ({
                    squares:
                        typeof nextSquare === "function"
                            ? nextSquare(state.squares)
                            : nextSquare,
                }));
            },

            setXIsNext: (nextXIsNext) => {
                set((state) => ({
                    xIsNext:
                        typeof nextXIsNext === "function"
                            ? nextXIsNext(state.xIsNext)
                            : nextXIsNext,
                }));
            },
        })
    )
);

export default useGameStore;