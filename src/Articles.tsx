
import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <Flex 
            width='100%'
            height='100%'
            gap='10px'
            flexDirection='column'
            fontFamily='Montserrat'
            fontWeight={600}
        >
            <Box
              fontSize='40px'
              paddingBottom='20px'
            >
              {"<blog>"}
            </Box>
      <Flex
        gap='10px'
        height='100%'
        width='100%'
        flexDirection='column'
        fontSize='26px'
      >
                <Box>
              <Link 
                to="post/TheAxiomFactory"
                key="TheAxiomFactory"
                state={{
                  date: "Jul 8, 2024",
                  content: `# The Axiom Factory

Godel’s incompleteness theorem proves that there is no way to derive all true arithmetical statements using a  complete formal system.  The only way is to continue adding an infinite amount of axioms.

My interpretation of Godel’s theorem is that because formal systems can never fully represent all true statements and therefore the human mind (which concocts and believes said unprovable but true arithmetical statements) is NOT a formal system (at least not a complete one).  The human mind (really all of biological life) is an active system in which representations of the world are perceived and those representations are taken as the axioms used to generate theorems about the nature of reality.   We make ASSUMPTIONS about reality (or its representations) in order to model it in a predictive way. In other words, the human mind is an AXIOM FACTORY.

Through experience, a “world model” is constructed which is simply a store of axioms for the representation of the world.  For example, the statement

If it is raining and I am standing in the rain then I will get wet 

is an axiom (a very specific one with no generality) which is constructed from experience.  The words that make up the statement are constant symbols like in a formal system.  Thus we have words for rain, stand, wet, is, etc which all have meanings determined by associations (i.e. they are not active).  They are simply associations we repeatedly reinforce over time.  We then construct statements from these associations to come up with axioms about the world.  The list of axioms is REALLY long (compared to say the axioms of a typical formal system like Principia Mathematica).  This is because we build them through experience, not logical thinking (though sometimes from logical thinking too but we’ll get to that).

Some examples would be:
- If fire then hot
- If hot and touch then burn
- If burn then get scar

Have you ever seen how a child will try to reach into a campfire?.  They don’t know it’s dangerous!  They are taught these things.  In other words, over time they learn axioms about the world they live in and interact with.  Sometimes they are passed down, sometimes they are learned directly through experience.  These axioms are considered to be true.  Are they absolutely true? No.  And you can’t ever determine whether they are or not, because absolute truth only exists in the realm of finistic formal systems.  Anything involving infinities will not yield to such analysis.  Not only is it improbable, it is provably IMPOSSIBLE (at least for arithmetic, ;)).  

The reality is that these axioms we discover as we go through life are PROBABLY true.  We can’t be sure they will always be the case.  Maybe the fire will be cold.  There’s really no way to know, and that was Godel’s point.  You can’t know. Stop trying.  It’s a waste of time you dummies. (Wittgenstein in the corner fuming and about to chimp out).  Instead we ASSUME these axioms to be true, which is what mathematicians do too, cause, like, that’s just your opinion man.  There’s no way to prove an axiom is true.  That’s ridiculous.

But does this matter so much? No, not really.  In order to navigate the world one only needs to construct axioms from experience and representations of the world.  In this way, incomplete (but useful) formal systems explaining the world are constructed in a very efficient way.  Through actively interacting with the environment, new axioms are discovered.  These axiom are then combined into statements to predict behavior and reality.   These statements are then tested in experiments to determine their correctness.  If they seem to have a high PROBABILITY of being true, they become new axioms (read assumptions) in our “world model”.  This is the entire field of epistemology.  The construction of more and more complex axioms based on experiential data.  It’s a wild world lad.

The rules of “Transformation” to use the parlance of formal systems are a bit tricky in this messy physical world.  They usually are not consistent, but that doesn’t really matter.  In the real world we have to use data (representations) to construct the rules of transformation on the fly.  Sometimes we can get away with a few steps here and there (physics has by far been the most generalizable field in history) but ultimately it’s just step by step testing and incremental progress.  That probably won’t change.  Thanks Kurt.

How does this relate to LLMs?  What is an LLM?  An LLM is a giant n-gram model beefed up on digital tren and Taiwanese work ethic.  Essentially, it takes in A LOT of data and learns the statistical relationships of language, as well as a bunch of statements in that language (including the statistical relationships of the language defining the statements…  whoooaaa mind fuck).  These statements can be all kinds of things like programs, who won the 1926 derby, instructions for combing a moustache and whatever else can be represented by digital data.  Are all these statements TRUE? Idk.  It doesn’t really matter.  Every LLM just ASSUMES they are true because that’s what in the data.  The data is the “world” (or representation there) of the LLM.  Are the electron orbitals of an atom “true”?

I said it learns the statistical relationships of a language (or multiple languages).  How does it do this?  Well essentially it is learning the probability of which words follow what other words (or tokens as they are called by the elves).  Specifically it’s building a map of the connections between words up to some <i>n</i> other words away from it. If you have enough data then you can construct grammatically correct statements because you know how words fit together.  You can think of a language model as a big surface in a hyperdimensional space of possible word lists.  If that surface was constructed on data that is all grammatically correct, then the entire surface will only contain grammatically correct statements.  Hooray!

But let’s get back to this LLM “world”.  What do I mean when I say world?  I mean a set of axioms!  It’s a REALLY REALLY big set of axioms but they are axioms.  It is a set of assumed facts representing the “Internet world”.   This goes beyond just Transformers.  It is true of all deep learning.  DL models are simply axiom factories.  They take in data and construct axioms from that data.  In Bayesian terms this is called “priors”.  Each training pass is an updating of the “priors” of a model, or just list of axioms.  That’s all a DL model is.  Just a long list of axioms.  [here we are gettting into conjecture, will stop for now, are they really just lists of axioms, they are technically just functions but I get the feeling this is not true.  Specifically they are BOUNDED fun ctions because they can never learn infinite regressions.  They are bounded in some data space (we don’t have infinite data to train on).

So are LLMs formal systems? Nay sir, they are not.  They are NOT algorithms.  Why not?  Because there is no way to use an LLM to construct new theorems.   Now, the systems that TRAIN language models are sort of like algorithms.  Why do I say sort of?  Well that’s because even ML algorithms used to train models can only create new axioms, not theorems.  

Wait, what?

Why do I call these new facts contained within the language model axioms and not theorems.  I mean they were DERIVED from the data weren’t they?  This is a debatable point but I think the reason these LLM “facts” should not be called theorems is that they are bounded by the data.  No ML algorithm can construct theorems outside the data distribution, so ultimately it’s just a set of axioms. In fact what an ML algorithm does is compress the data into efficient representations.  I believe this is the proper way of looking at it.  You could argue that they are in fact theorems and that actually LLMs learn all kinds of things from the data that are not explicitly stated (like copy algorithms and such).  Ultimately though, all those things are just static programs to the LLM.   At this point I’m waxing poetic and the plantas are taking hold so I think I’ll just leave it there.  
`
                }}
              >
                The Axiom Factory
              </Link>
              <Box 
                fontSize = '16px' 
                fontStyle = 'italic'
                fontWeight = '400'
              > 
                Jul 8, 2024
              </Box >
          </Box>
      </Flex >
        </Flex >
    );
};

export default Articles;
