/**
 * Feed data for /now — extracted from the live teenage.engineering page.
 *
 * Each post is a long-form feature: behind-the-scenes interview, field-system
 * travelogue, catching-up-with-artist piece. Intro paragraph + Q&A blocks +
 * image gallery.
 *
 * Image IDs refer to files in public/images/now/{id}_2048.webp or _1024.webp.
 * `imgSize` picks which size is available for that id.
 */

export type ImgSize = 2048 | 1024;

export interface NowImage {
  id: string;
  size: ImgSize;
  /** Caption printed below the image (TE calls this the "image-byline"). */
  caption?: string;
  /** Grid span — 12-col grid. 12 = full-bleed, 6 = half, 4 = third. */
  span?: 12 | 8 | 6 | 4;
  /** Aspect ratio as width/height. Defaults to 1 (square) for gallery mosaics. */
  aspect?: number;
}

export interface QAItem {
  q: string;
  a: string[];
}

export interface NowPost {
  slug: string;
  /** The first line in the headline, smaller-weight ("behind the scenes:"). */
  kicker?: string;
  /** Headline main text ("OP–XY", "field system™ with samuel organ", ...). */
  title: string;
  /** Hero image that opens the post. Full-bleed. */
  hero: NowImage;
  /** One or more intro paragraphs. */
  intro: string[];
  /** Optional first gallery row that appears before the Q&A. */
  preQAGallery?: NowImage[];
  /** The main Q&A body. */
  qa: QAItem[];
  /** Optional gallery that appears after the Q&A. */
  postQAGallery?: NowImage[];
  /** Optional outro with a link — e.g. "check out raghds latest ep …". */
  outro?: { text: string; href: string };
}

export const POSTS: ReadonlyArray<NowPost> = [
  // ────────────────────────────────────────────────────────────────────
  // 1. Behind the Scenes: OP–XY — Jonas Åberg interview
  // ────────────────────────────────────────────────────────────────────
  {
    slug: "bts-op-xy",
    kicker: "behind the scenes:",
    title: "OP–XY",
    hero: {
      id: "69c54e60fddc2942d3c71b98",
      size: 2048,
      caption: "OP–XY",
      span: 12,
      aspect: 16 / 9,
    },
    intro: [
      "senior software engineer jonas åberg is the main developer behind the OP–Z, OP–1 field, and OP–XY. we sat down with him to talk about the vision, the challenges along the way, and the reasoning behind some of OP–XY’s more unique features.",
    ],
    preQAGallery: [
      {
        id: "69c54dec38e6674acb2e658f",
        size: 2048,
        caption: "jonas åberg at the teenage engineering office",
        span: 6,
        aspect: 4 / 5,
      },
      {
        id: "69c5466756477142c6c2a0d3",
        size: 2048,
        caption: "OP–XY prototypes",
        span: 6,
        aspect: 4 / 5,
      },
    ],
    qa: [
      {
        q: "what was the original idea behind the OP–XY?",
        a: [
          "the original idea was to create a sibling to the OP–1, built around a sequencer-based workflow instead of the OP–1’s tape. they’re fundamentally different ways of building songs and projects. we had already made the OP–Z, which explored that workflow, so the ambition was to evolve the OP–Z into a form factor that would fit the field series.",
        ],
      },
      {
        q: "what inspired you during the project?",
        a: [
          "i try not to look too much at existing products when i’m working on something. if you have a clear reference point, it’s easy to get locked into that way of thinking. i’m usually more interested in breaking the concept. sometimes there are expectations shaped by how other companies design their products, but i strive to be open for different approaches.",
          "before i started working with synths, i worked in video games, and i draw a lot of inspiration from that. the OP–Z had even more of that mindset. it didn’t have a screen at all. that made it even more important to create a strong, intuitive feeling and make it fun to play, almost like a game, with a satisfying gameplay feel.",
          "i think a lot about how i approached game design and try to bring that into the process. where does the user focus their attention? what kinds of details matter?",
        ],
      },
      {
        q: "what was the biggest challenge during the project?",
        a: [
          "strangely enough, a big challenge was that the device suddenly had a screen. the OP–Z, which was a conceptual predecessor to the OP–XY, was designed specifically without one. at first, adding a screen felt like it would be a magic bullet, that it would solve all the things that were difficult on the OP–Z. but it actually turned out to be the opposite in some areas.",
          "features that came naturally on the OP–Z didn’t translate as naturally once we had to adapt them to a screen. it required a lot of rethinking and a lot of new ways of approaching things.",
        ],
      },
      {
        q: "what was the most fun part of the project?",
        a: [
          "i really enjoyed being able to push things further and continue developing ideas we didn’t fully realise in the OP–Z or the OP–1. getting to revisit ideas that had been around for years but never made it into a product. being someone who enjoys sound design, adding new features like micro tuning and deeper modulation was a highlight. they gave the product even more depth in terms of sound design possibilities. it was just fun to go all in.",
        ],
      },
      {
        q: "are there any underrated features?",
        a: [
          "i like linking tracks together. it allows you to play two or more tracks at the same time when pressing the keys. you can build really big sounds this way, layering sounds on top of each other. as an example, you could use a rhodes sample for the attack, a pad for the sustain and some arpeggiated pluck that creates movement over time. that sort of thing is really fun to experiment with.",
          "as far as i know, no other synth allows this to the same extent as the OP–XY. it’s a feature a lot of people miss, because the synth isn’t really geared towards that type of playability, as it’s fundamentally a sequencer. but when you use this feature, you’re using it more as a traditional instrument instead of something you program. i love that aspect, and i think some people might overlook it.",
        ],
      },
      {
        q: "was there anything you ended up not using?",
        a: [
          "for example, i made a sound engine where that had three oscillators playing sort of a triad, or a power chord. i mapped one of the knobs to change the oscillator intervals and apply different inversions. modulating that knob was wild. it was quite a unique but somewhat difficult concept to use, so it didn’t hold up all the way. another idea that didn’t make it was a screen that looked like a top-down car game, similar to early gta, a kind of traffic simulator. but it never really fit the product.",
        ],
      },
      {
        q: "any hints on upcoming updates?",
        a: [
          "it’s been a while since we last released an update, the list of requests and feedback from users is growing long. so, the next update will probably mainly focus on addressing some of those requests and fixing the most glaring bugs. looking further ahead, we have lots of fun ideas in store, there’s reason to be excited about the future of OP–XY.",
        ],
      },
    ],
    postQAGallery: [
      {
        id: "69c54db278ad6b42c747a7e7",
        size: 2048,
        caption: "OP–XY on the desk",
        span: 8,
        aspect: 3 / 2,
      },
      {
        id: "69c54daf65d12542d3fb1ae1",
        size: 2048,
        caption: "OP–XY close-up",
        span: 4,
        aspect: 3 / 4,
      },
      {
        id: "69c54dd30756bf42c76d25d6",
        size: 2048,
        caption: "OP–XY internals",
        span: 12,
        aspect: 16 / 9,
      },
      {
        id: "69c550851e17a84ae7282b61",
        size: 2048,
        caption: "OP–XY",
        span: 12,
        aspect: 16 / 9,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // 2. field system™ with samuel organ
  // ────────────────────────────────────────────────────────────────────
  {
    slug: "samuel-organ",
    kicker: "field system™",
    title: "with samuel organ",
    hero: {
      id: "69aa90fae0b5a741afbbc00b",
      size: 1024,
      caption: "samuel organ cycling through the scottish highlands",
      span: 12,
      aspect: 16 / 9,
    },
    intro: [
      "shoreham-by-sea-based musician samuel organ has been a working session musician for several years, recording alongside caroline polachek, shygirl and many others. last year he embarked on a journey, equipped with the TX–6, OP–XY and an OB–4, with the singular goal of writing an album while touring the uk by bike, documenting his journey on film.",
    ],
    preQAGallery: [
      {
        id: "69aa90f975341341af2d208c",
        size: 1024,
        caption: "making music by the loch",
        span: 6,
        aspect: 4 / 5,
      },
      {
        id: "69aa90fa3412a342124e3ba0",
        size: 1024,
        caption: "field system on the road",
        span: 6,
        aspect: 4 / 5,
      },
    ],
    qa: [
      {
        q: "when did you first come up with the idea for this project, and how did it develop from there?",
        a: [
          "a couple of years ago, i decided to try living on my bike full-time for the summer. i stayed at volunteer projects, helping with things like building ecohouses, while also trying to keep my music career going. i carried a bit of equipment with me, stayed at friends’ studios when i could, and continued working like that.",
          "through that experience, i started thinking more seriously about how to connect my interests. it raised a lot of questions for me about personal sustainability, both in terms of my career and the environmental impact of touring and making music. i began asking myself what i could do differently.",
          "i brought a friend with me to help document the journey. neither of us had made a film before. i could have invited a professional filmmaker, but i thought it would be more interesting to take a friend and simply see if we could do it ourselves. we’ve been on a lot of trips together and know how to travel and camp together well. making music in this way involves a lot of practical challenges, cycling, camping, navigating, and figuring out where to go next, so it helped to do it with someone who understood that rhythm.",
        ],
      },
      {
        q: "where did the inspiration for this project come from?",
        a: [
          "the inspiration for these journeys mostly came from personal experience. i used to play in bands and did quite a lot of touring. although there were many amazing moments, it eventually started to feel unsustainable. either it wasn’t sustainable for me personally, or it wasn’t sustainable for the industry or the planet. touring often meant playing the same venues again and again, spending long hours inside a van, selling merchandise, and using a lot of fuel. these things are often necessary when delivering music on a certain scale, but they didn’t feel aligned with my values anymore.",
          "cycling has always been a passion of mine, and i had already decided not to drive. eventually it felt natural to combine cycling with music and see what might happen. i wanted to try something new and challenge the way i normally worked.",
          "i also think the environment you work in changes the kind of music you make. personally, i often find traditional studios quite uninspiring:, white walls, electronics, and sometimes no windows. of course, a beautiful landscape can be far more stimulating creatively. when you make music outside, you become part of the environment. the sounds around you influence what you create.",
        ],
      },
      {
        q: "what was one of the most memorable moments during the filming of the project?",
        a: [
          "one of the most memorable moments during the trip happened at a place called the bone caves in northern scotland. it was one of the first planned locations we wanted to reach. getting there was extremely difficult. the trail was impossible to ride, so we had to push our bikes while carrying heavy gear. eventually we even had to remove all the equipment and carry the bikes up into the cave system.",
          "it was exhausting work, but once we arrived everything became completely silent. there was no wind at all that day. the goal of the project had been to reach some of the most remote places in the uk, and in that moment we truly felt far away from everything. the landscape was incredible and the atmosphere peaceful. it felt like a triumphant moment; proof that the idea might actually work.",
        ],
      },
      {
        q: "how long did the trip take and what was the most challenging part?",
        a: [
          "the trip lasted for 10 days. in some ways it felt short because every day was packed with activity. we had to travel between locations, film, make music, cook, camp, and manage the bikes. normally cycling and camping alone would be enough for a trip, but adding music production and filmmaking made everything far more intense.",
          "the hardest part wasn’t actually the weather, which is unusual for scotland. we were incredibly lucky and had almost two weeks of perfect sunshine without rain or clouds. the real challenge was balancing all the activities. by the end of each day we were physically fine but mentally exhausted because there was so much to think about. despite that, i would absolutely recommend that other people try something like this. making music in a new environment can be incredibly inspiring. putting yourself in slightly more difficult situations can also lead to better ideas. when life is very comfortable and controlled, creativity sometimes suffers.",
        ],
      },
      {
        q: "we’ve heard that you live on a boat, what led you to that choice?",
        a: [
          "after spending so much time travelling by bike, i also became more interested in alternative ways of living. about a year ago, i moved onto a boat in a small fishing town near brighton. it’s much cheaper and a lot quieter than living in the city. i wanted to experiment with a different lifestyle and see where i felt comfortable on that spectrum. i currently live on a small narrowboat, it’s tiny, but very cozy and i don’t own many things, so it works well for me. i’m actually about to move onto a slightly bigger boat that will have space for a small studio.",
        ],
      },
      {
        q: "where will your next adventure be? any ideas for future projects?",
        a: [
          "the next adventure is a trip to the isle of skye. i’ll cycle for three days across the highlands to reach the island, where i’ll play a concert at the finish of an ultramarathon event. participants will be running and cycling around the island during the day, and i’ll perform in the evening at the end of the race.",
          "there are a lot of ideas for future projects as well, although nothing is confirmed yet. the full film from the scotland trip will be released in a few months, which will hopefully give people a deeper look into the journey and the music that came from it.",
        ],
      },
    ],
    postQAGallery: [
      {
        id: "69aa90fa4c82593c2eaf9d70",
        size: 1024,
        caption: "camping with the field system",
        span: 6,
        aspect: 3 / 2,
      },
      {
        id: "69aa90fa4311a842137e365d",
        size: 1024,
        caption: "TX–6, OP–XY, OB–4",
        span: 6,
        aspect: 3 / 2,
      },
      {
        id: "69aa90fa2b7ab73c2f0a5f3b",
        size: 1024,
        caption: "scotland",
        span: 12,
        aspect: 21 / 9,
      },
      {
        id: "69aa9bb10109f24a5eba9a5c",
        size: 2048,
        caption: "at the bone caves",
        span: 8,
        aspect: 3 / 2,
      },
      {
        id: "64e4af91f6978f8fbc212f99",
        size: 2048,
        caption: "OB–4 field",
        span: 4,
        aspect: 3 / 4,
      },
      {
        id: "6735138db0f88c1a719dbd38",
        size: 2048,
        caption: "field system™",
        span: 12,
        aspect: 16 / 9,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // 3. catching up with raghd
  // ────────────────────────────────────────────────────────────────────
  {
    slug: "raghd",
    kicker: "catching up with",
    title: "raghd",
    hero: {
      id: "698dcc94af1629776b4d72ce",
      size: 2048,
      caption: "raghd",
      span: 12,
      aspect: 16 / 9,
    },
    intro: [
      "swedish-syrian artist raghd released her ep 'significant value' earlier this year. we caught up with her to talk about the making of the record, her psychology studies, and the debut album she’s been quietly working on in the south of sweden.",
    ],
    preQAGallery: [
      {
        id: "698dc900134196776bfbefb8",
        size: 2048,
        caption: "raghd at kouthoofd familie winkel",
        span: 12,
        aspect: 16 / 9,
      },
    ],
    qa: [
      {
        q: "tell us about the process behind 'significant value'",
        a: [
          "i had a two-year break from releasing music after the release of my ep a good friend. during those years, i was traveling a lot, meeting new producers and writers, and building new connections and musical bonds. it went well, but i never felt that anything really clicked 100 percent. during that period, i was also producing a lot by myself, which made me realize, hey, wait, i’m also a producer. it’s so easy to forget what you’re able to do on your own. so i looked at a few tracks i had lying around, had a chat with my team, and decided to turn those tracks into an ep. it was a messy process from the beginning, with a lot of late nights, bolt trips, and studying. but as soon as we decided that an ep was the way to go, it all started to run pretty smoothly. i worked on each track in different ways. both 'runaway' and 'i dream a lot' were tracks that i finished the same day i started them. 'touch me right' took a long time to figure out because of how dancey it was from the beginning. it had a four-on-the-floor kind of vibe that turned into something completely different. 'blink (interlude)' and 'arrest him' are based on samples from old songs, and 'wanna know' was made at the last minute during the summer.",
        ],
      },
      {
        q: "what inspired the name 'significant value'?",
        a: [
          "as i was finishing the ep, i was also doing my candidate in psychology. a big part of my studies focused on statistical significance, the extent to which something is meaningful or of consequence, which felt strangely similar to the tracks i was putting together. every track reflects a change or consequence in my life and how it affected me. for example, 'runaway' is about the urge to escape the responsibility that comes with being an older sibling, and 'wanna know' puts into words how messy it can be to move on from a relationship.",
        ],
      },
      {
        q: "what are you looking forward to in 2026?",
        a: [
          "i’m so excited to play more live, especially after the gig here at kouthoofd familie winkel. we used a lot of teenage engineering equipment in the set, and we’re planning to keep doing that in the future. i’m playing at the great escape in brighton this may, which i’m really looking forward to. i’m excited to keep improving my live sets and to meet the people who are listening to my music.",
          "after my break, i kind of forgot that people are actually listening to my music. i mean, the numbers represent real people who like or relate to what i have to say, and i just want to thank them all. i don’t think people understand how much it truly means to me when they listen to my work. the most beautiful thing about music is the human connection it creates.",
        ],
      },
      {
        q: "any hints on your upcoming debut album?",
        a: [
          "i’ve been working on my debut album for about a year together with chords and outrovert, who are both amazing producers. they’re from the south of sweden, but we meet up in stockholm to work. the sound is pretty different from what i usually do, but it still feels honest. it’s a new expression that the three of us have created together.",
          "making this album has made me even more excited to meet new people and discover new sounds and ways of expressing myself. so yeah, the album sounds different from my old stuff, but it feels good, and i write a lot about shame and guilt, which are really relevant themes for me right now. it’s been really fun to find a way to express those feelings. the process has been so freeing because no song sounds like the one before.",
        ],
      },
      {
        q: "stockholm or gothenburg?",
        a: [
          "dangerous question. the food is better in stockholm. you have the best restaurants. but culturally, i would say gothenburg. it’s more relaxed. at the same time, stockholm has all the people and the space to meet them. but i don’t even know if i should thank stockholm for that rather than the people who travel there. so yeah, stockholm is a great city for meeting people and it’s a fun place, but i love gothenburg. final answer, gothenburg.",
        ],
      },
    ],
    postQAGallery: [
      {
        id: "698dc80532c43f776b0557c4",
        size: 1024,
        caption: "raghd live",
        span: 6,
        aspect: 4 / 5,
      },
      {
        id: "698dc8054bdbee7638bebae2",
        size: 1024,
        caption: "raghd live",
        span: 6,
        aspect: 4 / 5,
      },
      {
        id: "698dc9d15cf1717638bc223f",
        size: 1024,
        caption: "raghd behind the scenes",
        span: 12,
        aspect: 16 / 9,
      },
    ],
    outro: {
      text: "check out raghd’s latest ep ‘significant value’",
      href: "https://open.spotify.com/album/1XlxQ0FxsIsNM8tu4BZ9uH?si=bu2G-ImQSuyUTfF9iVpv0g",
    },
  },

  // ────────────────────────────────────────────────────────────────────
  // 4. lara91k
  // ────────────────────────────────────────────────────────────────────
  {
    slug: "lara91k",
    kicker: "catching up with",
    title: "lara91k",
    hero: {
      id: "6961245554d77c025be4187f",
      size: 2048,
      caption: "lara91k",
      span: 12,
      aspect: 16 / 9,
    },
    intro: [
      "alternative argentinian artist and musician lara91k brings us into a world of love, existentialism and girls. she reflects on growing up in pinamar, finding her artistic voice in buenos aires, and how memory, place and new ideas are shaping a new chapter of her music.",
    ],
    preQAGallery: [
      {
        id: "69612452205521043878e511",
        size: 2048,
        caption: "lara91k, buenos aires",
        span: 6,
        aspect: 4 / 5,
      },
      {
        id: "69612455f5ebb10438b4b070",
        size: 2048,
        caption: "pinamar, argentina",
        span: 6,
        aspect: 4 / 5,
      },
    ],
    qa: [
      {
        q: "give us an introduction to your world.",
        a: [
          "it’s always kind of hard for me to describe myself haha. i’m just a musician and songwriter from argentina. i’m from a beach town called pinamar, and as a kid and teenager i was always listening to music. i started writing my own songs when i was ten. later i moved to buenos aires and began officially making music. so i guess i’m some sort of emo, alternative, “urban” artist from latinoamérica. most of my songs end up being about love, existentialism, and girls.",
        ],
      },
      {
        q: "what inspired you to write one of your latest single troya?",
        a: [
          "when i was in madrid with my friends gara duran and barry b we found our old teenage diaries. we read mine and found a dream i had a long time ago. in the dream i was in pinamar, the beach town i grew up in, together with my first love. we were running away from soldiers shooting at us, escaping some kind of war. eventually one of the bullets hits him and he falls to the ground. i stand before him desperately seeking help when one of the soldiers shoots me too. so yeah haha, my old teenage dream inspired me to write troya, a song about dying with the person you love.",
          "we wrote and produced the song together with 2 amazing musicians from argentina and finished it up with my good friend agus ramasso while traveling between buenos aires and madrid. during the process we used the CM–15 to record the acoustic guitar parts. i think troya is a very nice song that hints at the new sound i’ve been working on for my upcoming singles. i see it as my transition song.",
        ],
      },
      {
        q: "which part of your set-up do you currently rely on the most?",
        a: [
          "lately i’ve been using my TP–7 a ton. it makes me feel like dale cooper in twin peaks, talking to diane. i use it for demos, to record ambience, to capture random samples i can twist and throw back into my computer, and to record sessions or live shows. i love speeding up and reversing sounds and sneaking them into my songs. i also sample directly from vinyl or my iphone. and the guitar came back into my life recently. my next project wouldn’t be the same without it. and honestly, i’m still super attached to my computer because of autotune.",
        ],
      },
      {
        q: "if you could design your dream synth or plugin, what would it look like?",
        a: [
          "this question is so hard. i think i’d create a chromatic rainbow synth, something that can make beautifully detuned pads, keys, leads, and textures. it’d be amazing if it could sample and process sounds from the outside world too, with tons of warmth, saturation, and that gritty synth energy.",
        ],
      },
      {
        q: "who or what currently inspires you?",
        a: [
          "love inspires me. traveling inspires me. connecting with real people. paying attention to my inner self instead of relying on references all the time. trusting my own ideas. trying to reconnect with the feeling i had when i first started making music, that sense of urgency, of needing to say something.",
        ],
      },
      {
        q: "which argentinian artists are you most excited about right now?",
        a: ["you should keep an eye on paula prieto and milo j."],
      },
      {
        q: "any upcoming projects on its way?",
        a: [
          "i have a new project on the way. it’s super deep, super secret, and i’m honestly in love with it. lately i’ve been reconnecting with music the way i did in the early years. i feel like music in general is in a good moment. we’re all kind of tired of repetition and reels and instagram, la cosa masticada, things without soul. personally, i feel like i’m in a new, beautiful chapter. i’m curious again, discovering things. that feeling is giving me beautiful songs, and i really like what i’m making.",
        ],
      },
    ],
    postQAGallery: [
      {
        id: "696124577355f6025b5f6b6a",
        size: 2048,
        caption: "lara91k in the studio",
        span: 8,
        aspect: 3 / 2,
      },
      {
        id: "69612455fa69900438809751",
        size: 2048,
        caption: "CM–15 + acoustic guitar",
        span: 4,
        aspect: 3 / 4,
      },
    ],
    outro: {
      text: "be sure to check out lara91k’s latest music",
      href: "https://open.spotify.com/artist/2zPvDg6LI6NHPQVQIESjfW?si=hROsDLKmTZqjiv4Lj3nZUg",
    },
  },
];

