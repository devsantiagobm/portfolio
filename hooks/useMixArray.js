

export default function useMixArray(array) {
    return [...array].sort((a, b) => Math.random()-0.5)
}