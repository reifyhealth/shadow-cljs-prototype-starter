(ns app.views.home
  (:require
    [clojure.string :as str]
    [reagent.core :as r :refer [atom]]
    [app.views.steps :refer [SprintSteps]]
    [app.data :as data]
    ["antd" :refer [Layout Layout.Content
                    Typography.Title Typography.Text
                    Typography.Link Card Divider
                    Row Col Space]]))

(defn Home [state]
  (let [{:keys [theme]} @state]
   [:<>
    [:header.o-app__masthead {:class (str "bg-" theme)}
     [:h1 "Picasso for sprints"]
     [:h3
      "Build things that are useful and unique with the Picasso Design System. "
      [:span.margin-left-sm (rand-nth data/emoji)]]]
    [:section.o-app__section
     [:h3 "Getting started"]
     [:p "Bring the Picasso Design System into your sprint to iterate more confidently, introduce fewer bugs, and increase your overall velocity. Wow! Let's explore how Picasso can be the MVP of your sprint."]
     [:div.o-steps
      [SprintSteps state]]]]))
