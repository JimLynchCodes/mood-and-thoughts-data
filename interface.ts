type Thought = {

    /// Unique identifier for each thought object.
    id: number,

    /// Text to be displayed for player to read.
    text: String,

    /// Integer between 1000 (extreme happiness) and -1000 (extreme sadness)
    moodImpact: number,

    /// Number of seconds it takes to "process" the thought
    timeToProcess: number
}
