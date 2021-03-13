(ns app.data
  (:require
    [clojure.string :as str]
    [reagent.core :as r :refer [atom]]))

(def themes ["horizon" "sponsor" "site" "spruce"])
(def emoji ["🎉" "😄" "🚀" "🤙"])
